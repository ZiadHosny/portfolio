# خطة تحسين الموقع (SEO + عربي + أداء)

نمشي خطوة خطوة. كل خطوة: نخلصها، نختبرها، نعمل commit، وبعدين ننتقل للي بعدها.
علامة `[x]` = خلصت، `[ ]` = لسه.

## الخطوة 0: اللي اتعمل ومحتاج نشر
- [x] إصلاح الموبايل (سكرول أفقي، أحجام العناوين، الـ hero)
- [x] إصلاح هنج السكيلز (شيل الـ blur من الـ marquee)
- [x] SEO: structured data (Person + WebSite + ProfilePage)، صورة مشاركة 1200×630، keywords عربي، إعدادات googleBot
- [x] إصلاح الـ h1 (كان بيتقرا "ZiadHosny." من غير مسافة)
- [x] Google Search Console: الدومين اتأكدت ملكيته والموقع اتفهرس
- [ ] **commit + deploy**
- [ ] بعد النشر: Request Indexing للصفحة الرئيسية
- [ ] اختبار الصورة على opengraph.xyz وLinkedIn Post Inspector

## الخطوة 1: نسخة عربي من الموقع (`/ar`) ← الأكبر تأثيرًا
الهدف: الظهور في بحث "زياد حسني" و"System Design بالعربي".
- [ ] تحديد الشكل: مسار `/ar` جنب الإنجليزي (الرئيسي `/` يفضل إنجليزي)
- [ ] ملف ترجمة للنصوص (hero، الأقسام، الأزرار، الخبرات، الشهادات)
- [ ] `lang="ar"` و`dir="rtl"` على صفحة `/ar`
- [ ] مراجعة الـ UI في RTL (الـ navbar، الـ timeline، الكروت، الـ marquee)
- [ ] خط عربي (مثلًا Cairo أو IBM Plex Sans Arabic) مع next/font
- [ ] `hreflang` بين `/` و`/ar` وcanonical لكل صفحة
- [ ] metadata عربي (title وdescription وOG) لصفحة `/ar`
- [ ] إضافة `/ar` للـ sitemap
- [ ] زر تبديل اللغة في الـ navbar
- [ ] Request Indexing لصفحة `/ar`

## الخطوة 2: صفحات منفصلة بدل صفحة واحدة
الهدف: كل صفحة تتفهرس لوحدها وتظهر في كلمات أكتر.
- [ ] `/projects` و`/content` (أو `/youtube`) كصفحات حقيقية
- [ ] تحديث الـ navbar والروابط الداخلية
- [ ] إلغاء الـ redirects القديمة (`/projects` كانت بتحوّل لـ `/#projects`)
- [ ] metadata وcanonical لكل صفحة + إضافتهم للـ sitemap
- [ ] breadcrumbs structured data

## الخطوة 3: محتوى الفيديوهات
الهدف: زيارات من بحث "System Design بالعربي".
- [ ] صفحة لكل فيديو/حلقة: ملخص + embed + روابط الـ playlist
- [ ] `VideoObject` structured data
- [ ] صفحة فهرس للحلقات
- [ ] الروابط الداخلية بين الحلقات

## الخطوة 4: الأداء
- [ ] PageSpeed Insights على الموبايل والديسكتوب (نسجّل الأرقام قبل وبعد)
- [ ] مراجعة تأثير الـ preloader على LCP
- [ ] مراجعة حجم الصور والـ JS
- [ ] Core Web Vitals في Search Console

## الخطوة 5: تحسينات صغيرة
- [ ] إحصائيات زوّار (Plausible أو Google Analytics)
- [ ] قسم توصيات (Testimonials) لو متاح
- [ ] مراجعة صفحة 404 (رابط للرئيسية)
- [ ] زر "Copy email" في قسم التواصل

## خارج الكود (عليك)
- [ ] رابط `https://www.ziadhosny.com` في الـ bio: LinkedIn وYouTube وGitHub وInstagram وX وdev.to وMedium وStack Overflow وLinktree
- [ ] رابط الموقع في وصف كل فيديو يوتيوب
- [ ] redirect دائم (301) من `ziadhosny.com` إلى `www.ziadhosny.com` في Hostinger
- [ ] مقالات على dev.to وMedium بتشاور على الموقع
- [ ] متابعة Search Console ← Performance بعد أسبوعين لتلاتة

## ملاحظات
- ترتيب الاسم "Ziad Hosny" لوحده صعب لأن الاسم مشترك. الأفضل نركّز على `Ziad Hosny software engineer` و`زياد حسني`.
- كل خطوة بنختبرها بـ `npm run build` قبل الـ commit.
