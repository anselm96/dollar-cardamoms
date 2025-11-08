import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const TermsPage: React.FC = () => {
  const { language, t } = useLanguage();

  const en_content = (
    <div className="prose lg:prose-lg max-w-none">
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using dollarcardamoms.com (the "Site"), operated by Noor Exports ("we," "us"), you agree to comply with and be bound by the following terms and conditions (the "Terms"). If you do not agree to these Terms, you must not use this Site.</p>
      
      <h2>2. Use of the Site</h2>
      <p>This Site is provided for informational purposes and to facilitate business-to-business (B2B) partnership inquiries.</p>
      <ul>
        <li>You agree not to use the Site for any unlawful purpose.</li>
        <li>You agree not to use the Site to distribute spam or malicious code.</li>
        <li>This Site is not an e-commerce platform. No sales are conducted directly on this Site.</li>
      </ul>
      
      <h2>3. Intellectual Property</h2>
      <p>All content on this Site, including the Dollar Cardamoms logo, brand name, text, graphics, and videos, is the exclusive property of Noor Exports or its licensors and is protected by international copyright laws.</p>

      <h2>4. User-Submitted Information</h2>
      <p>By submitting information through our Feedback or Partnership forms, you grant Noor Exports a non-exclusive, royalty-free, perpetual right to use, reproduce, and analyze this information for business purposes, such as improving our products or contacting you regarding your inquiry.</p>

      <h2>5. Image & Video Credits</h2>
      <p>This Site features proprietary media as well as images and videos sourced from third-party royalty-free platforms, including but not limited to Pexels.com and Unsplash.com. All rights and credits for such media belong to their respective original creators.</p>
      
      <h2>6. Disclaimer of Warranties</h2>
      <p>The Site is provided on an "as-is" and "as-available" basis. We make no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, or completeness of the content on the Site.</p>
      
      <h2>7. Limitation of Liability</h2>
      <p>To the fullest extent permitted by law, Noor Exports shall not be liable for any indirect, incidental, or consequential damages arising out of your use or inability to use the Site.</p>
      
      <h2>8. Governing Law</h2>
      <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes relating to these Terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.</p>
      
      <h2>9. Changes to Terms</h2>
      <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this Site and updating the "Last Updated" date.</p>
      
      <h2>10. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us at: Noor Exports Email: <a href="mailto:noorexportsdesk@gmail.com">noorexportsdesk@gmail.com</a> Phone: +91 9940105777 Address: No. 7, State Bank of India Officers Colony 1st street, Thiruvottiyur, Chennai - 600019, Tamilnadu - INDIA</p>
    </div>
  );

  const ar_content = (
    <div className="prose lg:prose-lg max-w-none text-right" dir="rtl">
      <h2>1. قبول الشروط</h2>
      <p>من خلال الوصول إلى واستخدام موقع dollarcardamoms.com ("الموقع")، الذي تديره "نور إكسبورتس" ("نحن"، "لنا")، فإنك توافق على الالتزام بالشروط والأحكام التالية ("الشروط"). إذا كنت لا توافق على هذه الشروط، يجب عليك عدم استخدام هذا الموقع.</p>

      <h2>2. استخدام الموقع</h2>
      <p>يتم توفير هذا الموقع لأغراض إعلامية وتسهيل استفسارات الشراكة بين الشركات (B2B).</p>
      <ul>
        <li>أنت توافق على عدم استخدام الموقع لأي غرض غير قانوني.</li>
        <li>أنت توافق على عدم استخدام الموقع لتوزيع البريد العشوائي أو الرموز الخبيثة (spam).</li>
        <li>هذا الموقع ليس منصة تجارة إلكترونية. لا تتم أي مبيعات مباشرة على هذا الموقع.</li>
      </ul>

      <h2>3. الملكية الفكرية</h2>
      <p>جميع المحتويات على هذا الموقع، بما في ذلك شعار "دولار كاردامومز"، واسم العلامة التجارية، والنصوص، والرسومات، ومقاطع الفيديو، هي ملكية حصرية لـ "نور إكسبورتس" أو مرخصيها وهي محمية بموجب قوانين حقوق النشر الدولية.</p>

      <h2>4. المعلومات المقدمة من المستخدم</h2>
      <p>من خلال تقديم المعلومات عبر نماذج الملاحظات أو الشراكة الخاصة بنا، فإنك تمنح "نور إكسبورتس" حقاً غير حصري، وخالٍ من الرسوم، ودائم لاستخدام، إعادة إنتاج، وتحليل هذه المعلومات لأغراض تجارية، مثل تحسين منتجاتنا أو الاتصال بك بخصوص استفسارك.</p>

      <h2>5. حقوق الصور والفيديو</h2>
      <p>يحتوي هذا الموقع على وسائط مملوكة لنا بالإضافة إلى صور ومقاطع فيديو تم الحصول عليها من منصات خارجية مجانية، بما في ذلك على سبيل المثال لا الحصر Pexels.com و Unsplash.com. جميع الحقوق والاعتمادات لهذه الوسائط تعود إلى مبدعيها الأصليين.</p>

      <h2>6. إخلاء المسؤولية عن الضمانات</h2>
      <p>يتم توفير الموقع "كما هو" و "كما هو متاح". نحن لا نقدم أي تعهدات أو ضمانات من أي نوع، صريحة أو ضمنية، بخصوص دقة، موثوقية، أو اكتمال المحتوى على الموقع.</p>

      <h2>7. تحديد المسؤولية</h2>
      <p>إلى أقصى حد يسمح به القانون، لن تكون "نور إكسبورتس" مسؤولة عن أي أضرار غير مباشرة، عرضية، أو تبعية تنشأ عن استخدامك أو عدم قدرتك على استخدام الموقع.</p>

      <h2>8. القانون الحاكم</h2>
      <p>تخضع هذه الشروط وتُفسر وفقاً لقوانين الهند. أي نزاعات تتعلق بهذه الشروط ستكون خاضعة للاختصاص القضائي الحصري للمحاكم في تشيناي، تاميل نادو.</p>

      <h2>9. التغييرات على الشروط</h2>
      <p>نحن نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سنقوم بإخطاركم بأي تغييرات عن طريق نشر الشروط الجديدة على هذا الموقع وتحديث تاريخ "آخر تحديث".</p>

      <h2>10. اتصل بنا</h2>
      <p>إذا كان لديكم أي أسئلة حول هذه الشروط، يرجى الاتصال بنا على: نور إكسبورتس البريد الإلكتروني: <a href="mailto:noorexportsdesk@gmail.com">noorexportsdesk@gmail.com</a> الهاتف: +91 9940105777 العنوان: رقم 7، مستعمرة ضباط بنك الدولة الهندي، الشارع الأول، ثيروفوتيور، تشيناي - 600019، تاميل نادو - الهند.</p>
    </div>
  );

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark text-center mb-12">
            {t('termsPage.title')}
          </h1>
          <p className="text-center text-gray-500 mb-8">Last Updated: 03/11/2025</p>
          {language === 'en' ? en_content : ar_content}
        </div>
      </div>
    </div>
  );
};

export default TermsPage;