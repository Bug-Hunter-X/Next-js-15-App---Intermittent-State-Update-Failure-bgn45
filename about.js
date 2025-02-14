```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //Simulate an API call, this will cause the issue to happen randomly
    const interval = setInterval(() => {
      fetch('/api/random')
        .then(res => res.json())
        .then(data => setCount(data.count));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>Count: {count}</p>
    </div>
  );
}
```
```javascript
// pages/api/random.js

export default function handler(req, res) {
  const randomCount = Math.floor(Math.random() * 10);
  res.status(200).json({ count: randomCount });
}
```