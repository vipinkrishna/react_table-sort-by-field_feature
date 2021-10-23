import React, { useState } from 'react';

let toggle_order = true;

export default function Articles({ data }) {
  const [items, setItems] = useState(() => {
    return data.sort((a, b) => {
      if (a['color'] < b['color']) return 1;
      else return -1;
    });
  });

  const sortby = (field) => {
    const items_copy = [...items];
    if (toggle_order) {
      items_copy.sort((a, b) => {
        if (a[field] > b[field]) return 1;
        else return -1;
      });
      toggle_order = false;
    } else {
      items_copy.sort((a, b) => {
        if (a[field] < b[field]) return 1;
        else return -1;
      });
      toggle_order = true;
    }
    setItems(items_copy);
  };

  return (
    <div>
      <table id="articles">
        <thead>
          <tr>
            <th onClick={() => sortby('color')}>COLOR</th>
            <th onClick={() => sortby('value')}>VALUE</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.color}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
