# icon

- https://heroicons.com/

# how to develop nav by nextjs

- link to router
- get param
- activate css

```
// 客户端渲染
'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// ...

export default function NavLinks() {
  // 获取参数
  const pathname = usePathname();

  return (
    <>
      // links: nav data
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            // 选择渲染内容
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
```

# shadcn 是如何实现

只选择合适 css 的组件，基于 nestjs 构件应用

- 如果没有 database 只需要进行 use client
