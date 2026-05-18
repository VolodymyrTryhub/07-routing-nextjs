type LayoutProps = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

export default function FilterLayout({ children, sidebar }: LayoutProps) {
  return (
    <div style={{ display: 'flex', gap: '30px' }}>
      <aside>{sidebar}</aside>

      <main>{children}</main>
    </div>
  );
}
