export const sections = [
  { id: 'art', name: '画画', icon: '✷', subtitle: '把喜欢的颜色和瞬间留下来', cover: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=85', color: '#df8c72' },
  { id: 'life', name: '日常', icon: '☼', subtitle: '一些普通却值得记住的日子', cover: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1600&q=85', color: '#99aa81' },
  { id: 'research', name: '科研', icon: '✳', subtitle: '问题、尝试与新的发现', cover: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1600&q=85', color: '#819bb0' },
  { id: 'code', name: '代码学习', icon: '⌘', subtitle: '一点一点，把想法写出来', cover: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1600&q=85', color: '#a68eaf' },
] as const;

export type SectionId = (typeof sections)[number]['id'];
