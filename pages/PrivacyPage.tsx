import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const PrivacyPage: React.FC = () => {
  const { language, t } = useLanguage();

  const en_content = (
    <div className="prose lg:prose-lg max-w-none">
      <h2>1. Introduction</h2>
      <p>Welcome to dollarcardamoms.com (the "Site"). This Site is owned and operated by Noor Exports ("we," "us," or "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site.</p>

      <h2>2. Information We Collect</h2>
      <p>We collect information that you voluntarily provide to us when you:</p>
      <ul>
        <li><strong>Submit a Partnership Inquiry:</strong> We collect your [Company Name], [Contact Person], [Email Address], [Phone Number], [Country of Interest], and your [Message].</li>
        <li><strong>Submit Feedback:</strong> We collect your [Name], [City], and your [Feedback].</li>
        <li><strong>Subscribe to our Newsletter:</strong> We collect your [Email Address].</li>
      </ul>
      <p>We may also automatically collect non-personal information, such as your IP address to determine your geographic region (for language selection), browser type, and operating system.</p>

      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to your partnership inquiries and business requests.</li>
        <li>Send you our newsletter, which includes recipes and company updates. You may opt-out at any time.</li>
        <li>Analyze user feedback to improve our products and services.</li>
        <li>Monitor and analyze site usage and trends to improve your experience.</li>
        <li>Serve the correct language version (Arabic/English) of the Site.</li>
      </ul>

      <h2>4. Sharing of Your Information</h2>
      <p>We do not sell, trade, or rent your personal information to third-party marketers. We may share your information in the following limited circumstances:</p>
      <ul>
        <li>Internally within Noor Exports to personnel who need the information to respond to your requests (e.g., our sales team).</li>
        <li>With legal authorities if required by law or to protect our rights.</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>We implement reasonable administrative, technical, and physical security measures to help protect your personal information. However, no electronic transmission over the internet can be guaranteed to be 100% secure.</p>

      <h2>6. Cookies</h2>
      <p>Our Site may use cookies to enhance your experience, such as remembering your language preference. You can set your browser to refuse cookies, but some parts of the Site may not function properly.</p>

      <h2>7. Third-Party Links</h2>
      <p>Our Site may contain links to other websites. We are not responsible for the privacy practices of these third-party sites.</p>
      
      <h2>8. Children's Privacy</h2>
      <p>Our Site is not intended for use by children under the age of 13. We do not knowingly collect personal information from children.</p>

      <h2>9. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Unsubscribe from our newsletter at any time by clicking the "unsubscribe" link in the email.</li>
        <li>Request access to the personal data we hold about you.</li>
      </ul>

      <h2>10. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. The "Last Updated" date at the top of this policy will indicate the latest revision.</p>

      <h2>11. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at: Noor Exports Email:
        <a href="mailto:noorexportsdesk@gmail.com">noorexportsdesk@gmail.com</a> Phone: +91 9940105777 Address: No. 7, State Bank of India Officers Colony 1st street, Thiruvottiyur, Chennai - 600019, Tamilnadu - INDIA
      </p>
    </div>
  );

  const ar_content = (
    <div className="prose lg:prose-lg max-w-none text-right" dir="rtl">
      <h2>1. مقدمة</h2>
      <p>أهلاً بكم في dollarcardamoms.com ("الموقع"). هذا الموقع مملوك ومدار بواسطة "نور إكسبورتس" ("نحن"، "لنا"، أو "الخاص بنا"). نحن ملتزمون بحماية خصوصيتكم. تشرح سياسة الخصوصية هذه كيف نجمع، نستخدم، نكشف، ونحمي معلوماتكم عند زيارتكم لموقعنا.</p>
      
      <h2>2. المعلومات التي نجمعها</h2>
      <p>نحن نجمع المعلومات التي تقدمونها لنا طواعية عندما:</p>
      <ul>
        <li><strong>تقدمون طلب شراكة:</strong> نجمع [اسم الشركة]، [اسم جهة الاتصال]، [البريد الإلكتروني]، [رقم الهاتف]، [الدولة المهتم بها]، ورسالتكم.</li>
        <li><strong>تقدمون رأياً/ملاحظة:</strong> نجمع [الاسم]، [المدينة]، وملاحظاتكم.</li>
        <li><strong>تشتركون في نشرتنا البريدية:</strong> نجمع عنوان بريدكم الإلكتروني.</li>
      </ul>
      <p>قد نقوم أيضاً بجمع معلومات غير شخصية تلقائياً، مثل عنوان IP الخاص بكم لتحديد منطقتكم الجغرافية (لاختيار اللغة)، ونوع المتصفح، ونظام التشغيل.</p>

      <h2>3. كيف نستخدم معلوماتكم</h2>
      <p>نحن نستخدم المعلومات التي نجمعها لـ:</p>
      <ul>
        <li>الرد على استفسارات الشراكة وطلبات الأعمال الخاصة بكم.</li>
        <li>إرسال نشرتنا البريدية، التي تتضمن وصفات وتحديثات عن الشركة. يمكنكم إلغاء الاشتراك في أي وقت.</li>
        <li>تحليل ملاحظات المستخدمين لتحسين منتجاتنا وخدماتنا.</li>
        <li>مراقبة وتحليل استخدام الموقع واتجاهاته لتحسين تجربتكم.</li>
        <li>عرض نسخة اللغة الصحيحة (العربية/الإنجليزية) من الموقع.</li>
      </ul>

      <h2>4. مشاركة معلوماتكم</h2>
      <p>نحن لا نبيع، نتاجر، أو نؤجر معلوماتكم الشخصية لجهات تسويق ثالثة. قد نشارك معلوماتكم في الظروف المحدودة التالية:</p>
      <ul>
        <li>داخلياً ضمن "نور إكسبورتس" للموظفين الذين يحتاجون إلى المعلومات للرد على طلباتكم (مثل فريق المبيعات لدينا).</li>
        <li>مع السلطات القانونية إذا اقتضى القانون ذلك أو لحماية حقوقنا.</li>
      </ul>

      <h2>5. أمن البيانات</h2>
      <p>نحن ننفذ تدابير أمنية إدارية، تقنية، ومادية معقولة للمساعدة في حماية معلوماتكم الشخصية. ومع ذلك، لا يمكن ضمان أن يكون أي إرسال إلكتروني عبر الإنترنت آمناً بنسبة 100%.</p>
      
      <h2>6. ملفات تعريف الارتباط (Cookies)</h2>
      <p>قد يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربتكم، مثل تذكر تفضيل اللغة الخاص بكم. يمكنكم ضبط متصفحكم لرفض ملفات تعريف الارتباط، ولكن قد لا تعمل بعض أجزاء الموقع بشكل صحيح.</p>

      <h2>7. روابط الجهات الخارجية</h2>
      <p>قد يحتوي موقعنا على روابط لمواقع أخرى. نحن لسنا مسؤولين عن ممارسات الخصوصية لهذه المواقع الخارجية.</p>

      <h2>8. خصوصية الأطفال</h2>
      <p>موقعنا غير مخصص للاستخدام من قبل الأطفال دون سن 13 عاماً. نحن لا نجمع عن علم معلومات شخصية من الأطفال.</p>

      <h2>9. حقوقكم</h2>
      <p>لديكم الحق في:</p>
      <ul>
        <li>إلغاء الاشتراك من نشرتنا البريدية في أي وقت عن طريق النقر على رابط "إلغاء الاشتراك" في البريد الإلكتروني.</li>
        <li>طلب الوصول إلى البيانات الشخصية التي نحتفظ بها عنكم.</li>
      </ul>

      <h2>10. التغييرات على هذه السياسة</h2>
      <p>قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. تاريخ "آخر تحديث" في أعلى هذه السياسة سيشير إلى أحدث مراجعة.</p>
      
      <h2>11. اتصل بنا</h2>
      <p>
        إذا كان لديكم أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على: نور إكسبورتس البريد الإلكتروني:
        <a href="mailto:noorexportsdesk@gmail.com">noorexportsdesk@gmail.com</a> الهاتف: +91 9940105777 العنوان: رقم 7، مستعمرة ضباط بنك الدولة الهندي، الشارع الأول، ثيروفوتيور، تشيناي - 600019، تاميل نادو - الهند.
      </p>
    </div>
  );

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark text-center mb-12">
            {t('privacyPage.title')}
          </h1>
          <p className="text-center text-gray-500 mb-8">Last Updated: 03/11/2025</p>
          {language === 'en' ? en_content : ar_content}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;