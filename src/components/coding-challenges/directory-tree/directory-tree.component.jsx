import { useState } from "react";
import "./directory-tree.styles.scss";
const DirectoryTree = () => {
  const directories = {
    children: [
      {
        name: "node_modules",
        children: [
          {
            name: "axios",
          },
          {
            name: "react",
          },
        ],
      },
      {
        name: "package.json",
      },
      {
        name: "home",
        children: [
          {
            name: "home.component.jsx",
          },
          {
            name: "home.component.scss",
          },
        ],
      },
      {
        name: "routes",
        children: [
          {
            name: "routes.component.jsx",
            children: [
              {
                name: "home.component.jsx",
              },
              {
                name: "menu.component.jsx",
              },
              {
                name: "about.component.jsx",
              },
            ],
          },
        ],
      },
    ],
  };

  const Entry = ({ entry, depth }) => {
    const [isExpended, setIsExpended] = useState(false);
    return (
      <div>
        {entry.children ? (
          <button className="entry-button" onClick={() => setIsExpended(!isExpended)}>
            {isExpended ? "-" : "+"}
            {entry.name}
          </button>
        ) : (
          <div className="entry-text">{entry.name}</div>
        )}
        {isExpended && (
          <div style={{ paddingLeft: `${depth * 10}px` }}>
            {entry.children?.map((entry) => (
              <Entry entry={entry} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };
  return (
    <div className="directory-wrapper">
      <h2 className="directory-title">Directory Tree</h2>
      {directories.children.map((entry) => (
        <Entry entry={entry} depth={1} />
      ))}
    </div>
  );
};

export default DirectoryTree;
