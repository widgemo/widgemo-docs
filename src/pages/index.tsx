import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const ProductCard: React.FC<{
  title: string;
  description: string;
  href: string;
  status?: 'published' | 'coming-soon';
  icon?: string;
}> = ({ title, description, href, status = 'published', icon = '📦' }) => (
  <div
    style={{
      flex: '1 1 calc(50% - 1rem)',
      minWidth: '280px',
      padding: '1.5rem',
      border: '1px solid var(--ifm-color-emphasis-200)',
      borderRadius: '0.75rem',
      backgroundColor: 'var(--ifm-color-emphasis-0)',
      transition: 'all 0.3s ease',
      cursor: status === 'published' ? 'pointer' : 'default',
      opacity: status === 'coming-soon' ? 0.7 : 1,
    }}
    onMouseEnter={(e) => {
      if (status === 'published') {
        e.currentTarget.style.borderColor = 'var(--ifm-color-primary)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 87, 34, 0.15)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }
    }}
    onMouseLeave={(e) => {
      if (status === 'published') {
        e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-200)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }
    }}
  >
    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{icon}</div>
    <h3 style={{ margin: '0.5rem 0' }}>{title}</h3>
    <p style={{ margin: '0.5rem 0 1.5rem 0', color: 'var(--ifm-color-emphasis-700)', fontSize: '0.95rem' }}>
      {description}
    </p>
    {status === 'published' ? (
      <Link
        href={href}
        style={{
          display: 'inline-block',
          paddingBlock: '0.5rem',
          paddingInline: '1rem',
          backgroundColor: 'var(--ifm-color-primary)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.5rem',
          fontWeight: 500,
          transition: 'background-color 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary-dark)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--ifm-color-primary)';
        }}
      >
        View Docs →
      </Link>
    ) : (
      <span style={{
        display: 'inline-block',
        paddingBlock: '0.5rem',
        paddingInline: '1rem',
        backgroundColor: 'var(--ifm-color-emphasis-200)',
        color: 'var(--ifm-color-emphasis-700)',
        borderRadius: '0.5rem',
        fontWeight: 500,
      }}>
        Coming Soon
      </span>
    )}
  </div>
);

export default function Home(): React.ReactElement {
  return (
    <Layout
      title="Widgemo Documentation Hub"
      description="Complete documentation for the Widgemo product family"
    >
      <main style={{ padding: '3rem 0' }}>
        {/* Hero Section */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingInline: '1rem',
          textAlign: 'center',
          marginBottom: '4rem',
        }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)' }}>
            Widgemo Documentation
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: '2rem' }}>
            Complete guides, API references, and examples for all Widgemo products.
          </p>
        </div>

        {/* Core Products Section */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingInline: '1rem' }}>
          <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Core Products</h2>
          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '4rem',
          }}>
            <ProductCard
              icon="⚛️"
              title="widgemo-core"
              description="Zero-dependency React component library for configurable data components, tables, grids, and charts."
              href="/core"
              status="published"
            />
          </div>
        </div>

        {/* Ecosystem & Extensions Section */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingInline: '1rem' }}>
          <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Ecosystem & Extensions</h2>
          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '4rem',
          }}>
            <ProductCard
              icon="📊"
              title="buck-stream"
              description="Financial data visualization and analysis tools built on widgemo-core."
              href="/buckstream"
              status="coming-soon"
            />
            <ProductCard
              icon="🩹"
              title="bandaid"
              description="Data repair and transformation utilities for widgemo-core."
              href="/bandaid"
              status="coming-soon"
            />
          </div>
        </div>

        {/* Standalone Apps Section */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingInline: '1rem' }}>
          <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Standalone Applications</h2>
          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '4rem',
          }}>
            <ProductCard
              icon="📈"
              title="vellum"
              description="Comprehensive analytics and reporting platform."
              href="/vellum"
              status="coming-soon"
            />
            <ProductCard
              icon="🔍"
              title="heystack"
              description="Data discovery and exploration engine."
              href="/heystack"
              status="coming-soon"
            />
            <ProductCard
              icon="🤖"
              title="tradebot"
              description="Automated trading and strategy analysis tools."
              href="/tradebot"
              status="coming-soon"
            />
            <ProductCard
              icon="🧵"
              title="weave"
              description="Data integration and workflow automation platform."
              href="/weave"
              status="coming-soon"
            />
          </div>
        </div>

        {/* Quick Links Section */}
        <div style={{
          maxWidth: '1200px',
          margin: '4rem auto 0',
          paddingInline: '1rem',
          paddingBlock: '2rem',
          backgroundColor: 'var(--ifm-color-emphasis-100)',
          borderRadius: '0.75rem',
          textAlign: 'center',
        }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Quick Links</h2>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/core" style={{ textDecoration: 'none', color: 'var(--ifm-color-primary)', fontWeight: 500 }}>
              widgemo-core Documentation →
            </Link>
            <a href="https://github.com/widgemo/widgemo-docs" style={{ textDecoration: 'none', color: 'var(--ifm-color-primary)', fontWeight: 500 }}>
              GitHub Repository →
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
