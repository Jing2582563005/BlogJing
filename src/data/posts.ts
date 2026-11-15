export const sections = [
  { id: 'art', name: '画画', icon: '✷', subtitle: '把喜欢的颜色和瞬间留下来', cover: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=85', color: '#df8c72' },
  { id: 'life', name: '日常', icon: '☼', subtitle: '一些普通却值得记住的日子', cover: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1600&q=85', color: '#99aa81' },
  { id: 'research', name: '科研', icon: '✳', subtitle: '问题、尝试与新的发现', cover: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1600&q=85', color: '#819bb0' },
  { id: 'code', name: '代码学习', icon: '⌘', subtitle: '一点一点，把想法写出来', cover: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1600&q=85', color: '#a68eaf' },
] as const;

export type SectionId = (typeof sections)[number]['id'];
export type Post = { id: string; section: SectionId; date: string; text: string; images?: string[]; tags?: string[] };

// 在这里添加帖子。图片可以先用公开 URL；接入编辑后台后可改为从内容文件读取。
export const posts: Post[] = [
  { id: 'art-1', section: 'art', date: '2026-11-12', text: '最近在练习用更松弛的线条画画。先不急着画得准确，试着记住当时看到它的感觉。', tags: ['速写', '练习'], images: ['https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=900&q=85'] },
  { id: 'life-1', section: 'life', date: '2026-11-08', text: '下午出门走了走。阳光很好，路边的小花也开得认真。', tags: ['散步'], images: ['https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=900&q=85'] },
  { id: 'research-1', section: 'research', date: '2026-11-03', text: '今天把一个卡了很久的问题重新拆开：先确认假设，再检查数据，最后才是调参数。过程慢一点，思路反而清楚了。', tags: ['研究笔记'] },
  { id: 'code-1', section: 'code', date: '2026-10-28', text: '写下第一篇代码学习记录。把遇到的问题和解决过程记下来，未来回头看，也许会感谢现在的自己。', tags: ['学习日志'] },
];
