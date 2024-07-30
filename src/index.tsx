import React from 'react';
import ReactDOM from 'react-dom/client';
import dayjs from 'dayjs';
import './index.css';
import Calendar from './Calendar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Calendar value={dayjs(new Date)} onChange={(date) => {
      alert(date.format('YYYY-MM-DD'))
    }}></Calendar>
);


