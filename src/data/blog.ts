export interface BlogPost {
  slug: string;
  titleAr: string;
  descriptionAr: string;
  excerpt: string;
  publishDate: string;
  readMinutes: number;
  tags: string[];
  relatedCities?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'salat-al-jumua',
    titleAr: 'صلاة الجمعة — شروطها وأوقاتها وأهميتها في الإسلام',
    descriptionAr: 'دليل شامل لصلاة الجمعة: وقتها، شروط وجوبها، ركعاتها، وفضلها. اعرف متى يبدأ وقت خطبة الجمعة في الإمارات.',
    excerpt: 'صلاة الجمعة فريضة واجبة على كل مسلم مقيم بالغ عاقل. تعرّف على وقتها الصحيح، شروطها، وكيف ترتبط بأوقات الظهر في الإمارات.',
    publishDate: '2025-03-01',
    readMinutes: 8,
    tags: ['صلاة الجمعة', 'أوقات الصلاة', 'فقه الصلاة'],
    relatedCities: ['dubai', 'abu-dhabi', 'sharjah', 'ajman'],
  },
  {
    slug: 'arkan-al-salah',
    titleAr: 'أركان الصلاة وشروطها — دليل كامل للصلاة الصحيحة',
    descriptionAr: 'تعرّف على أركان الصلاة السبعة وشروطها، خطوة بخطوة من النية إلى التسليم. مع أوقات الصلوات الخمس في الإمارات.',
    excerpt: 'للصلاة أركان لا تصح إلا بها، وشروط ينبغي توافرها قبل الشروع فيها. هذا الدليل يشرح كل خطوة بوضوح.',
    publishDate: '2025-03-02',
    readMinutes: 10,
    tags: ['أركان الصلاة', 'كيفية الصلاة', 'فقه الصلاة'],
    relatedCities: ['dubai', 'abu-dhabi'],
  },
  {
    slug: 'salat-al-fajr',
    titleAr: 'صلاة الفجر — وقتها وفضلها وأسرار المحافظة عليها',
    descriptionAr: 'كل ما تحتاج معرفته عن صلاة الفجر: متى تبدأ وتنتهي، فضائلها في القرآن والسنة، وأوقات الفجر في مدن الإمارات.',
    excerpt: 'صلاة الفجر هي أصعب الصلوات مواظبةً وأعظمها أجراً. اعرف وقتها الدقيق وأسرار المحافظة عليها.',
    publishDate: '2025-03-03',
    readMinutes: 7,
    tags: ['صلاة الفجر', 'أوقات الصلاة', 'فضل الصلاة'],
    relatedCities: ['dubai', 'abu-dhabi', 'sharjah', 'ras-al-khaimah', 'fujairah'],
  },
  {
    slug: 'salat-al-dhuhr',
    titleAr: 'صلاة الظهر — الصلاة الوسطى ووقتها في الإمارات',
    descriptionAr: 'دليل صلاة الظهر الكامل: متى يبدأ وقت الزوال، كم ركعة، فضلها، والفارق في الوقت بين مدن الإمارات المختلفة.',
    excerpt: 'تُصلَّى صلاة الظهر عند زوال الشمس وهي أول صلاة اليوم وفق الترتيب الفلكي. اعرف وقتها الدقيق في مدينتك.',
    publishDate: '2025-03-04',
    readMinutes: 6,
    tags: ['صلاة الظهر', 'أوقات الصلاة', 'الصلاة الوسطى'],
    relatedCities: ['dubai', 'abu-dhabi', 'al-ain', 'fujairah'],
  },
  {
    slug: 'salat-al-isha',
    titleAr: 'صلاة العشاء — وقتها وركعاتها وصلاة التراويح',
    descriptionAr: 'تعرّف على وقت صلاة العشاء في الإمارات، كم ركعة فيها، وعلاقتها بصلاة التراويح في شهر رمضان المبارك.',
    excerpt: 'صلاة العشاء تختم اليوم الصلاتي للمسلم. فضلها عظيم وربطها برمضان من خلال التراويح يجعلها محوراً روحياً مهماً.',
    publishDate: '2025-03-05',
    readMinutes: 7,
    tags: ['صلاة العشاء', 'التراويح', 'رمضان'],
    relatedCities: ['dubai', 'sharjah', 'ajman', 'umm-al-quwain'],
  },
  {
    slug: 'turuq-hisab-awqat-al-salah',
    titleAr: 'طرق حساب أوقات الصلاة — لماذا تختلف المواقيت بين التطبيقات؟',
    descriptionAr: 'شرح مبسّط لطرق حساب أوقات الصلاة (رابطة العالم الإسلامي، ISNA، الأزهر) والسبب وراء اختلاف المواقيت بين دبي وأبوظبي.',
    excerpt: 'لماذا يختلف وقت الأذان بين تطبيق وآخر؟ هذا المقال يشرح علم الفلك وراء حساب مواقيت الصلاة بطريقة مبسّطة.',
    publishDate: '2025-03-06',
    readMinutes: 9,
    tags: ['حساب أوقات الصلاة', 'طرق الحساب', 'الفلك الإسلامي'],
    relatedCities: ['dubai', 'abu-dhabi', 'fujairah', 'ras-al-khaimah'],
  },
  {
    slug: 'awqat-al-salah-wal-fusul',
    titleAr: 'أوقات الصلاة في الصيف والشتاء — لماذا تتغير كل يوم؟',
    descriptionAr: 'فهم لماذا تتغير مواقيت الصلاة يومياً وبين الفصول في الإمارات، والفارق الكبير بين الفجر صيفاً وشتاءً.',
    excerpt: 'قد يصل الفارق في وقت الفجر بين يناير ويوليو إلى ساعة كاملة في الإمارات. اعرف لماذا وكيف تؤثر الفصول على صلواتك.',
    publishDate: '2025-03-07',
    readMinutes: 6,
    tags: ['الفصول وأوقات الصلاة', 'الفلك', 'الصيف والشتاء'],
    relatedCities: ['dubai', 'abu-dhabi', 'ras-al-khaimah'],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
