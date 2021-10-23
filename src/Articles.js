import React, { useState } from 'react';

export default function Articles({ data }) {

  const sortby = (field) => {

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
          {data.map((item, index) => (
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
