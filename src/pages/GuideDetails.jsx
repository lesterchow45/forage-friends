import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getGuide, getGuides } from '../services/dataService';

const GuideDetails = () => {
  const { id } = useParams();
  const [guide, setGuide] = useState(null);
  const [trendingGuides, setTrendingGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState('');
  const activeIdRef = useRef(''); // Ref to track activeId without re-binding scroll listener

  const [processedContent, setProcessedContent] = useState('');

  // Keep ref in sync with state
  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  useEffect(() => {
    const fetchGuide = async () => {
      try {
        const { data } = await getGuide(id);
        if (!data) throw new Error('Guide not found');
        setGuide(data);

        // Parse content, generate TOC, and inject IDs safely
        if (data.content) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data.content, 'text/html');
          const headers = Array.from(doc.querySelectorAll('h2, h3'));

          const tocData = headers.map((header, index) => {
            const id = `section-${index}`;
            header.id = id; // Inject ID directly into DOM node
            return {
              id,
              text: header.textContent,
              level: header.tagName.toLowerCase()
            };
          });

          setToc(tocData);
          setProcessedContent(doc.body.innerHTML); // Save the modified HTML

          // Set first item active initially
          if (tocData.length > 0) {
            setActiveId(tocData[0].id);
          }
        }

        // Fetch trending guides (excluding current)
        const { data: allGuides } = await getGuides();
        setTrendingGuides((allGuides || []).filter(g => String(g.id) !== String(id)).slice(0, 3));

      } catch (error) {
        console.error('Error fetching guide:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuide();
  }, [id]);

  // Active TOC Logic (Scroll Event)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Query fresh elements every time to avoid stale references
          const headers = Array.from(document.querySelectorAll('.article-body h2, .article-body h3'));

          const offset = 150; // Offset for sticky header
          let currentId = '';

          // Find the header closest to the top of the viewport
          for (const header of headers) {
            const rect = header.getBoundingClientRect();
            // We want the header that is just above the "reading line" (offset)
            // If rect.top is less than offset, it means the header is above that line
            if (rect.top < offset) {
              currentId = header.id;
            } else {
              break;
            }
          }

          // Compare with ref to avoid dependency on state (prevents listener re-binding)
          if (currentId && currentId !== activeIdRef.current) {
            setActiveId(currentId);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount/update to set initial state correctly
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, processedContent]); // Removed activeId from dependencies

  if (loading) return <div className="container py-12 text-center">Loading...</div>;
  if (!guide) return <div className="container py-12 text-center">Guide not found.</div>;

  return (
    <div className="guide-details-page">
      <div className="container">

        {/* Header Section: Split Layout */}
        <header className="guide-header">
          <div className="header-content">
            <div className="breadcrumbs">
              <Link to="/">Home</Link> / <Link to="/guides">Guides</Link> / <span>{guide.title}</span>
            </div>
            <h1 className="article-title">{guide.title}</h1>
          </div>
          <div className="header-image">
            <img src={guide.image} alt={guide.title} />
          </div>
        </header>

        <div className="guide-layout">

          {/* Left Sidebar */}
          <aside className="guide-sidebar">
            <div className="sidebar-sticky">

              <div className="share-section">
                <h4>Share this Article</h4>
                <div className="social-icons">
                  <button className="social-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
                  </button>
                  <button className="social-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                  </button>
                  <button className="social-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                  </button>
                </div>
              </div>

              {toc.length > 0 && (
                <div className="toc-box">
                  <h4>In this Article</h4>
                  <ul className="toc-list">
                    {toc.map(item => (
                      <li key={item.id} className={`toc-item ${item.level} ${activeId === item.id ? 'active' : ''}`}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="trending-section">
                <h4>Trending Guides</h4>
                <div className="trending-list">
                  {trendingGuides.map(g => (
                    <Link key={g.id} to={`/guide/${g.id}`} className="trending-item">
                      <img src={g.image} alt={g.title} />
                      <span>{g.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Main Content */}
          <article className="guide-content-main">
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: processedContent || `<p>${guide.excerpt}</p>` }}
            />
          </article>

        </div>
      </div>

      <style>{`
        .guide-details-page {
          background-color: white;
          min-height: 100vh;
          padding-bottom: 80px;
        }
        
        /* Header Section */
        .guide-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          padding: 64px 0;
          margin-bottom: 40px;
        }
        
        .breadcrumbs {
          font-size: 0.9rem;
          color: var(--color-text-light);
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .breadcrumbs a {
          color: var(--color-text-light);
          text-decoration: none;
        }
        .breadcrumbs a:hover {
          color: var(--color-primary);
        }

        .article-title {
          font-family: var(--font-serif, serif);
          font-size: 3.5rem;
          line-height: 1.1;
          color: var(--color-text);
          font-weight: 400;
        }

        .header-image {
          width: 100%;
          height: 400px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-card);
        }
        .header-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Layout */
        .guide-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 80px;
          align-items: start;
        }

        /* Sidebar */
        .guide-sidebar {
          position: relative;
          height: 100%;
        }
        .sidebar-sticky {
          position: sticky;
          top: 40px;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .share-section h4, .toc-box h4, .trending-section h4 {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-text);
          margin-bottom: 16px;
          font-weight: 700;
        }

        .social-icons {
          display: flex;
          gap: 12px;
        }
        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #e0e0e0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          color: var(--color-text);
        }
        .social-btn:hover {
          background: var(--color-text);
          color: white;
          border-color: var(--color-text);
        }

        /* TOC Box */
        .toc-box {
          background-color: #f9f9f9;
          padding: 24px;
          border-radius: 12px;
        }
        .toc-list {
          list-style: none;
          padding: 0;
        }
        .toc-item {
          margin-bottom: 12px;
          position: relative;
        }
        .toc-item:last-child {
          margin-bottom: 0;
        }
        .toc-item a {
          display: block;
          text-decoration: none;
          color: var(--color-text-light);
          font-size: 0.95rem;
          transition: color 0.2s;
          line-height: 1.4;
          padding-left: 32px; /* Reserve space for arrow */
        }
        .toc-item a:hover {
          color: var(--color-primary);
        }
        .toc-item.active a {
          color: var(--color-text);
          font-weight: 600;
        }
        .toc-item.active a::before {
          content: '→';
          position: absolute;
          left: 0;
          top: 0; /* Adjust if needed based on line-height */
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          background-color: var(--color-text);
          color: white;
          border-radius: 50%;
          font-size: 12px;
          font-weight: bold;
        }
        .toc-item.h3 a {
          font-size: 0.95rem;
        }

        /* Trending */
        .trending-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .trending-item {
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          color: var(--color-text);
          font-weight: 500;
          font-size: 1rem;
          transition: opacity 0.2s;
        }
        .trending-item:hover {
          opacity: 0.7;
        }
        .trending-item img {
          width: 60px;
          height: 60px;
          border-radius: 8px;
          object-fit: cover;
        }

        /* Main Content */
        .guide-content-main {
          max-width: 800px;
        }

        .article-body {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--color-text);
          font-family: var(--font-sans, sans-serif); /* Changed from Georgia/serif */
        }
        .article-body h2 {
          font-size: 2rem;
          margin-top: 64px;
          margin-bottom: 24px;
          color: var(--color-text);
          font-family: var(--font-sans);
          font-weight: 700;
          scroll-margin-top: 40px;
        }
        .article-body h3 {
          font-size: 1.5rem;
          margin-top: 40px;
          margin-bottom: 16px;
          color: var(--color-text);
          font-family: var(--font-sans);
          font-weight: 600;
          scroll-margin-top: 40px;
        }
        .article-body p {
          margin-bottom: 24px;
        }
        .article-body img {
          width: 100%;
          border-radius: var(--radius-lg);
          margin: 40px 0;
          box-shadow: var(--shadow-card);
        }
        .article-body ul {
          margin-bottom: 24px;
          padding-left: 24px;
        }
        .article-body li {
          margin-bottom: 12px;
        }
        .alert {
          padding: 24px;
          border-radius: 8px;
          background: #fff3cd;
          color: #856404;
          margin: 32px 0;
        }

        @media (max-width: 1024px) {
          .guide-header {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 32px 0;
          }
          .article-title {
            font-size: 2.5rem;
          }
          .guide-layout {
            grid-template-columns: 1fr;
          }
          .guide-sidebar {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default GuideDetails;
