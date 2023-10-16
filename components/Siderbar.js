import Link from 'next/link';

const Sidebar = ({ postsByCategory }) => {
  return (
    <aside>
      <h2>Categories</h2>
      <ul>
        {Object.keys(postsByCategory).map((category) => (
          <li key={category}>
            <h3>{category}</h3>
            <ul>
              {postsByCategory[category].map(({ id, title }) => (
                <li key={id}>
                  <Link href={`/posts/${id}`}>{title}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
