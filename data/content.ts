import { Recipe } from '../types';

export const recipes: Recipe[] = [
    {
        id: 1,
        image: "/Blog 1 Cardamom Qahwa.jpg",
        title: { en: "Cardamom Qahwa: The Soul of Arab Hospitality", ar: "القهوة العربية بالهيل - روح الضيافة الخليجية" },
        description: { en: "In every Gulf home, the aroma of Qahwa signals warmth, respect, and tradition.", ar: "في كل بيت خليجي، تفوح رائحة القهوة العربية معلنةً عن الدفء والاحترام والأصالة." },
        ingredients: {
            en: [
                "2 tbsp lightly roasted Arabic coffee powder",
                "½ tsp Dollar Cardamom (crushed pods)",
                "2 cups water",
                "A few saffron strands (optional)"
            ],
            ar: [
                "ملعقتان كبيرتان من القهوة العربية المحمصة خفيفاً",
                "نصف ملعقة صغيرة من دولار هيل (حبات مهروسة)",
                "كوبان من الماء",
                "بضع خيوط من الزعفران (اختياري)"
            ]
        },
        preparation: {
            en: [
                "Bring the water to a gentle boil.",
                "Add the coffee powder and simmer for 5 minutes.",
                "Stir in crushed Dollar Cardamom pods for their deep aroma.",
                "Strain and serve hot in small finjan cups."
            ],
            ar: [
                "يُغلى الماء بلطف.",
                "تُضاف القهوة وتُغلى لمدة 5 دقائق.",
                "تُضاف حبات دولار هيل المهروسة لإطلاق رائحتها العطرة.",
                "تُصفّى القهوة وتُقدّم ساخنة في فناجين صغيرة."
            ]
        },
        servingTip: {
            en: "Pair your Qahwa with dates for a complete Gulf experience, where every sip tells a story of tradition, elegance, and hospitality.",
            ar: "قدّم القهوة العربية مع التمر لتجربة خليجية أصيلة - حيث يروي كل رشفة قصة كرم وتقاليد عريقة."
        }
    },
    {
        id: 2,
        image: "/Blog 2  Basbousa & Baklava.jpg",
        title: { en: "Basbousa & Baklava with Dollar Cardamom", ar: "البسبوسة والبقلاوة بنكهة دولار هيل" },
        description: { en: "The favorite desserts of the Gulf become unforgettable when touched with the magic of Dollar Cardamom.", ar: "تُعد البسبوسة والبقلاوة من أشهر الحلويات في الخليج، وتصبحان أكثر روعة عند إضافة لمسة دولار هيل." },
        ingredients: {
            en: [
                "For Basbousa:",
                "2 cups semolina",
                "1 cup sugar",
                "½ cup yogurt",
                "1 tsp baking powder",
                "¼ tsp Dollar Cardamom powder",
                "For Syrup:",
                "1 cup sugar",
                "½ cup water",
                "¼ tsp Dollar Cardamom powder"
            ],
            ar: [
                "لتحضير البسبوسة:",
                "كوبان من السميد",
                "كوب من السكر",
                "نصف كوب من اللبن",
                "ملعقة صغيرة من البيكنج باودر",
                "ربع ملعقة صغيرة من مسحوق دولار هيل",
                "لتحضير القطر:",
                "كوب من السكر",
                "نصف كوب من الماء",
                "ربع ملعقة صغيرة من مسحوق دولار هيل"
            ]
        },
        preparation: {
            en: [
                "Mix semolina, yogurt, sugar, and cardamom powder.",
                "Bake until golden.",
                "Pour syrup infused with Dollar Cardamom on top while hot."
            ],
            ar: [
                "يُخلط السميد واللبن والسكر والهيل.",
                "تُخبز حتى تكتسب لوناً ذهبياً.",
                "يُسكب القطر بالهيل فوقها وهي ساخنة."
            ]
        },
        note: {
            en: "For Baklava: Add a pinch of Dollar Cardamom powder to the nut filling to elevate its depth and aroma.",
            ar: "لتحضير البقلاوة: أضف رشة من دولار هيل إلى حشوة المكسرات لإثراء النكهة وجعلها لا تُنسى."
        }
    },
    {
        id: 3,
        image: "/Blog 3 From Kerala to Kuwait Tea.jpg",
        title: { en: "From Kerala to Kuwait: A Cup of Tea, Redefined", ar: "من كيرالا إلى الكويت - فنجان شاي بطابع جديد" },
        description: { en: "Tea in the Gulf is more than a beverage; it is a moment of connection. Add Dollar Cardamom to your chai for an amazing experience.", ar: "الشاي في الخليج ليس مجرد مشروب - بل لحظة دفء ولقاء. أضف دولار هيل إلى كوب الشاي لتشعر بمزيج نسمات كيرالا." },
        ingredients: {
            en: [
                "2 cups water",
                "1 cup milk",
                "2 tsp tea leaves",
                "2 Dollar Cardamom pods (crushed)",
                "Sugar to taste"
            ],
            ar: [
                "كوبان من الماء",
                "كوب من الحليب",
                "ملعقتان صغيرتان من أوراق الشاي",
                "حبتان من دولار هيل (مهروستان)",
                "سكر حسب الرغبة"
            ]
        },
        preparation: {
            en: [
                "Boil water with cardamom and tea leaves.",
                "Add milk and simmer for a few minutes.",
                "Strain and enjoy a perfectly aromatic cup of Dollar Chai."
            ],
            ar: [
                "يُغلى الماء مع الهيل وأوراق الشاي.",
                "ثم يُضاف الحليب ويُغلى لبضع دقائق.",
                "يُصفّى ويُقدّم ساخناً لتستمتع بنكهة دولار شاي العطرة."
            ]
        }
    },
    {
        id: 4,
        image: "/Blog 4 Cardamom Rice.jpg",
        title: { en: "Cardamom-Spiced Rice: A Gulf Kitchen Essential", ar: "الأرز بالهيل - نكهة لا غنى عنها في المطبخ الخليجي" },
        description: { en: "From biryanis to kabsa, Dollar Cardamom brings out the heart of Gulf cuisine.", ar: "من البرياني إلى الكبسة، يضيف دولار هيل الروح الحقيقية للمطبخ الخليجي." },
        ingredients: {
            en: [
                "2 cups basmati rice",
                "4 Dollar Cardamom pods",
                "2 tbsp ghee or oil",
                "1 cinnamon stick, 3 cloves",
                "Salt to taste"
            ],
            ar: [
                "كوبان من أرز بسمتي",
                "أربع حبات من دولار هيل",
                "ملعقتان كبيرتان من السمن أو الزيت",
                "عود قرفة وثلاث حبات قرنفل",
                "ملح حسب الذوق"
            ]
        },
        preparation: {
            en: [
                "Sauté cardamom, cinnamon, and cloves in ghee.",
                "Add washed rice and cook with water until fluffy.",
                "The aroma of Dollar Cardamom will fill your kitchen with comfort and tradition."
            ],
            ar: [
                "يُحمّر الهيل والقرفة والقرنفل في السمن.",
                "ثم يُضاف الأرز المغسول ويُطهى حتى ينضج.",
                "ستملأ رائحة دولار هيل مطبخك بالدفء والأصالة."
            ]
        }
    },
    {
        id: 5,
        image: "/Blog 5 Cardamom Tea.jpg",
        title: { en: "Cardamom Milk Delight: A Sweet Sip of Tradition", ar: "حليب الهيل - رشفة حلاوة تقليدية" },
        description: { en: "A warm glass of cardamom milk is the simplest yet most comforting Gulf classic.", ar: "يُعد حليب الهيل من أبسط وأشهى المشروبات التقليدية في الخليج." },
        ingredients: {
            en: [
                "2 cups milk",
                "2 crushed Dollar Cardamom pods",
                "1 tsp honey or sugar",
                "A few saffron strands (optional)"
            ],
            ar: [
                "كوبان من الحليب",
                "حبتان من دولار هيل (مهروستان)",
                "ملعقة صغيرة من العسل أو السكر",
                "بضع خيوط زعفران (اختياري)"
            ]
        },
        preparation: {
            en: [
                "Simmer milk with Dollar Cardamom until aromatic.",
                "Sweeten with honey and serve warm.",
                "A soothing drink that bridges the purity of Kerala and the sweetness of the Gulf in every sip."
            ],
            ar: [
                "يُغلى الحليب مع دولار هيل حتى تنتشر رائحتته العطرة.",
                "ثم يُحلّى بالعسل ويُقدّم دافئاً.",
                "مشروب يجمع بين نقاء كيرالا وحلاوة الخليج في كل رشفة."
            ]
        }
    }
];

export const content = {
    nav: {
        home: { en: "Home", ar: "الصفحة الرئيسية" },
        about: { en: "About Us", ar: "من نحن" },
        products: { en: "Products", ar: "المنتجات" },
        partnership: { en: "Partnership", ar: "الشراكة" },
        recipes: { en: "Recipes & Blog", ar: "وصفات" },
        contact: { en: "Contact Us", ar: "اتصل بنا" }
    },
    hero: {
        title: { en: "From the Misty Hills of Kerala to Your Cup - Unrivalled Green Cardamom", ar: "من تلال كيرالا الضبابية إلى فنجانك - الهيل الأخضر الفائق الجودة" },
        subtitle: { en: "Premium 6mm | 7mm | 8mm | 8mm+", ar: "بدرجات 6 مم | 7 مم | 8 مم | +8 مم" },
        cta: { en: "Explore Our Grades", ar: "اكتشف درجاتنا" }
    },
    journey: {
        title: { en: "Our Journey - From Plantation to Your Table", ar: "رحلتنا - من المزرعة إلى طاولتك" },
        step1_title: { en: "Growing in the Highlands of Kerala", ar: "زراعة في مرتفعات كيرالا" },
        step1_text: { en: "Nestled in the pristine hills of Kerala, our cardamom plants flourish under cool mist, rich soils and tropical monsoon rains.", ar: "في تلال كيرالا البكر، تنمو نباتات الهيل تحت ضباب بارد وتربة غنية وأمطار موسمية استوائية." },
        step2_title: { en: "Hand-Harvested with Care", ar: "حصاد يدوي بعناية" },
        step2_text: { en: "Skilled harvesters select only the ripest pods, ensuring maximum aroma and oil content.", ar: "يجمع الحاصدون المهرة فقط الثمار الناضجة، لضمان أقصى غنى في العطر والمحتوى الزيتي." },
        step3_title: { en: "Advanced Grading & Packaging", ar: "تدريج وتغليف متقدم" },
        step3_text: { en: "From 6 mm to 8 mm+, each pod is carefully graded, sorted and sealed immediately to preserve freshness.", ar: "من 6 مم إلى +8 مم، تُفصّل كل كبسولة وتُفرز وتُحفظ فوراً للحفاظ على نضارتها." },
        step4_title: { en: "Delivered Without Compromise", ar: "توصيل بدون تنازلات" },
        step4_text: { en: "Our export-grade logistics ensure the same aroma and quality reach Gulf-country shelves - no loss of flavour, no shortcuts.", ar: "تضمن لوجستياتنا التصديرية وصول العطر والجودة نفسهما إلى رفوف دول الخليج - دون فقد أو تساهل." }
    },
    grades: {
        title: { en: "Our Grades - Tailored for Distinction", ar: "درجاتنا - مصممة للتميز" },
        intro: { en: "At Dollar Cardamoms, we believe that quality begins with size, seed-to-husk ratio and oil richness. We offer four distinct size grades:", ar: "في Dollar Cardamoms، نؤمن أن الجودة تبدأ بالحجم ونسبة البذور إلى القشرة وغنى الزيوت. نقدّم أربعة مستويات:" },
        grade1_size: { en: "6 mm", ar: "6 مم" },
        grade1_title: { en: "Entry Premium", ar: "درجة مميزة أولية" },
        grade1_text: { en: "Rich aroma, perfect for everyday use.", ar: "عطر غني، مثالية للاستخدام اليومي." },
        grade2_size: { en: "7 mm", ar: "7 مم" },
        grade2_title: { en: "Mid-Premium", ar: "درجة متوسطة متميزة" },
        grade2_text: { en: "Larger pod, more seeds, bolder flavour.", ar: "كبسولة أكبر، بذور أكثر، نكهة أقوى." },
        grade3_size: { en: "8 mm", ar: "8 مم" },
        grade3_title: { en: "Premium Grade", ar: "درجة متميزة" },
        grade3_text: { en: "Extra large pod, full aroma, ideal for discerning consumers.", ar: "كبسولة كبيرة، عطر كامل، مثالية للمستهلكين المميزين." },
        grade4_size: { en: "8 mm+", ar: "8+ مم" },
        grade4_title: { en: "Ultra-Premium", ar: "درجة فائق التميز" },
        grade4_text: { en: "The largest size, maximum seed count, highest oil content. The pinnacle of green cardamom.", ar: "الحجم الأكبر، أقصى عدد بذور، أعلى محتوى زيوت. قمة الهيل الأخضر." }
    },
    whyus: {
        title: { en: "Why Choose Us", ar: "لماذا تختارنا" },
        point1: { en: "Kerala origin - grown at altitude, in clean, misty hills.", ar: "المنشأ كيرالا - مزروعة على ارتفاع، في تلال ضبابية نقية." },
        point2: { en: "Certified food safety - we are FSSAI, Halal & Kosher Certified.", ar: "سلامة غذائية معتمدة - حاصلون على شهادة FSSAI، حلال وكوشير." },
        point3: { en: "Strict grading and sorting for consistent size and aroma.", ar: "فرز وتدريج صارم لضمان الحجم والعطر الثابتين." },
        point4: { en: "Export-ready packaging - freshness preserved all the way to Gulf markets.", ar: "تغليف جاهز للتصدير - يُحفظ النضارة حتى أسواق الخليج." },
        point5: { en: "Two decades of trust in Iraq and other countries; now expanding to GCC with the same commitment.", ar: "أكثر من عقدين من الثقة في العراق، والآن نتوسع إلى دول الخليج بنفس الالتزام." }
    },
    partnershipCta: {
        title: { en: "Partnership Opportunities", ar: "فرص الشراكة" },
        text: { en: "Become our distributor or dealer in the Gulf. We offer best-in-class quality, competitive commissions and full support. Join us for growth and excellence.", ar: "انضم إلى شبكتنا في الخليج كموزّع أو وكيل. نقدّم جودة عالية، عمولات تنافسية، ودعماً كاملاً. شاركنا النمو والتميّز." },
        cta: { en: "Go to Partnership Page", ar: "اذهب إلى صفحة الشراكة" }
    },
    recipesCta: {
        title: { en: "Gulf Authentic Traditional Recipes", ar: "وصفات خليجية تقليدية أصيلة" },
        text: { en: "Discover how our green cardamom enhances authentic Gulf dishes. Try our featured recipes and stay tuned for more.", ar: "اكتشف كيف يعزّز هيلنا الأخضر الأطباق التقليدية الخليجية الأصيلة. جرب وصفاتنا المميّزة وتابعنا للمزيد." },
        cta: { en: "View All Recipes", ar: "عرض كل الوصفات" }
    },
    feedback: {
        title: { en: "Share Your Feedback", ar: "شاركنا رأيك" },
        text: { en: "Loved the aroma or taste? Tell us how you used our cardamom and how it made your dish special. We value your feedback!", ar: "هل أعجبك العطر أو النكهة؟ شاركنا كيف استخدمت هيلنا وما الذي جعل طبقك مميزاً. نقدر ملاحظاتك." },
        name: { en: "Your Name", ar: "اسمك" },
        country: { en: "Country", ar: "الدولة" },
        rating: { en: "Rating", ar: "التقييم" },
        comment: { en: "Your Feedback", ar: "ملاحظاتك" },
        submit: { en: "Submit Feedback", ar: "إرسال" }
    },
    footer: {
        contactInfo: { en: "Contact Information", ar: "معلومات الاتصال" },
        address_label: { en: "Address", ar: "العنوان" },
        address: { en: "Noor Exports, No. 7, State Bank of India Officers Colony, 1st Street, Thiruvottiyur, Chennai - 600019, Tamil Nadu - INDIA", ar: "نور إكسبورتس، رقم 7، مستعمرة ضباط بنك الدولة الهندي، الشارع الأول، ثيروفوتيور، تشيناي - 600019، تاميل نادو - الهند" },
        email_label: { en: "Email", ar: "البريد الإلكتروني" },
        email_value: { en: "noorexportsdesk@gmail.com", ar: "noorexportsdesk@gmail.com" },
        phone_label: { en: "Customer Care", ar: "خدمة العملاء" },
        phone_value: { en: "+91 9940105777", ar: "+91 9940105777" },
        newsletter: { en: "Subscribe for recipes & news", ar: "اشترك للحصول على الوصفات والأخبار" },
        newsletterPlaceholder: { en: "Your email address", ar: "بريدك الإلكتروني" },
        subscribe: { en: "Subscribe", ar: "اشتراك" },
        terms: { en: "Terms & Conditions", ar: "الشروط والأحكام" },
        privacy: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
        credits: { en: "Images sourced from Pexels & Unsplash as credited", ar: "الصور من Pexels و Unsplash كما هو مذكور" },
 copyright: {
  en: `© ${new Date().getFullYear()} Dollar Cardamoms. All Rights Reserved. Built with ❤️ by <a href="https://mi8y.com/" target="_blank" rel="noopener noreferrer" class="underline hover:text-green-600 font-semibold"> Mi8y Technologies</a>.`,
  ar: `© ${new Date().getFullYear()} دولار كاردامومز. جميع الحقوق محفوظة. تم التصميم بحب بواسطة <a href="https://mi8y.com/" target="_blank" rel="noopener noreferrer" class="underline hover:text-green-600 font-semibold"> Mi8y Technologies</a>.`
}

    },
    aboutPage: {
        title: { en: "About Dollar Cardamoms", ar: "عن دولار كاردامومز" },
        p1: { en: "At Dollar Cardamoms, we bring you green cardamom of exceptional quality, cultivated in the misty hills of Kerala, India. With decades of reliable export experience (especially in Iraq for over 20 years), we now proudly serve the Gulf market with the same passion for flavour, aroma and integrity.", ar: "في Dollar Cardamoms، نقدم لك هيل أخضر بجودة استثنائية، يُزرع في تلال كيرالا الضبابية في الهند. ومع خبرة تصديرية موثوقة تمتد لعقود (خصوصًا في العراق لأكثر من 20 عاماً)، نفخر الآن بخدمة سوق الخليج بنفس الشغف للنكهة، العطر، والنزاهة." },
        p2: { en: "Our plantations, harvests, grading systems and export logistics are built around the simple idea: your cardamom should reach you as fresh and aromatic as the day it was picked.", ar: "مزروعاتنا، حصدنا، أنظمة التدريج لدينا، ولوجستيات التصدير مبنيّة حول فكرة بسيطة: أن يصل الهيل إليك بنفس نضارته وعطره كاليوم الذي جمع فيه." },
        p3: { en: "We are FSSAI-certified and committed to the highest food safety and traceability standards. Every pod is tracked from farm to shelf.", ar: "نحن حاصلون على شهادة FSSAI وملتزمون بأعلى معايير السلامة الغذائية والتتبع. كل كبسولة يتم تتبعها من المزرعة إلى الرف." }
    },
    productsPage: {
        title: { en: "Our Premium Cardamom Grades", ar: "درجات الهيل الفاخرة لدينا" },
        intro: { en: "We offer four distinct size-grades of green cardamom, each reflecting our commitment to precision, freshness and premium flavour. Each grade is hand-sorted, carefully packed and shipped under conditions that preserve optimal aroma until you use it.", ar: "نقدم أربع درجات واضحة الحجم من الهيل الأخضر، وكل منها يعكس التزامنا بالدقة، النضارة، والنكهة الفاخرة. كل درجة يتم فرزها يدوياً، تُغلف بعناية، وتُشحن في ظروف تحافظ على العطر الأمثل حتى استخدامك." }
    },
    partnershipPage: {
        title: { en: "Grow With Us in the Gulf Region", ar: "نمو معنا في منطقة الخليج" },
        intro: { en: "Dollar Cardamoms invites regional distributors and dealers across the Gulf (UAE, Saudi Arabia, Kuwait, Oman, Qatar, Bahrain, Iraq) to become part of our premium network.", ar: "تدعوكم Dollar Cardamoms لتصبحوا جزءاً من شبكتنا المتميّزة كموزعين ووكلاء في دول الخليج (الإمارات، السعودية، الكويت، عمان، قطر، البحرين، العراق)." },
        whyPartnerTitle: { en: "Why partner with us?", ar: "لماذا الشراكة معنا؟" },
        point1: { en: "Premium product: 6 mm to 8 mm+ size grades, unmatched aroma and freshness.", ar: "منتج فاخر: درجات 6 مم إلى +8 مم، عطر ونضارة لا يُضاهيان." },
        point2: { en: "Proven export track-record (Iraq for over two decades) and now Gulf expansion.", ar: "سجل تصدير موثوق (العراق لأكثر من عقدين) والآن التوسع نحو الخليج." },
        point3: { en: "Competitive commissions, transparent terms, ongoing support (marketing materials, product training).", ar: "عمولات تنافسية، شروط شفافة، دعم مستمر (مواد تسويقية، تدريب على المنتج)." },
        point4: { en: "Quality assurance: FSSAI-certified, origin in Kerala, strict grade sorting, export-ready packaging.", ar: "ضمان الجودة: معتمد FSSAI، منشأ كيرالا، فرز دقيق، تغليف جاهز للتصدير." },
        point5: { en: "Flexible dealership models: retail chains, gourmet supermarkets, spice-specialty stores.", ar: "نماذج وكالة مرنة: سلاسل التجزئة، متاجر السوبرماركت الراقية، متاجر التوابل الخاصة." },
        formIntro: { en: "If you are interested in becoming our partner, please fill the form below and our regional manager will contact you within 48 hours.", ar: "إذا كنت مهتماً بأن تصبح شريكاً لنا، يُرجى ملء النموذج أدناه وسيتواصل معك مديرنا الإقليمي خلال 48 ساعة." },
        form_company: { en: "Company Name", ar: "اسم الشركة" },
        form_contact_person: { en: "Contact Person", ar: "اسم جهة الاتصال" },
        form_email: { en: "Email Address", ar: "البريد الإلكتروني" },
        form_phone: { en: "Phone Number", ar: "رقم الهاتف" },
        form_country: { en: "Country of Interest", ar: "الدولة المهتم بها" },
        form_message: { en: "Your Message", ar: "رسالتك" },
        form_submit: { en: "Submit Inquiry", ar: "إرسال الاستفسار" }
    },
    recipesBlogPage: {
        title: { en: "Recipe & Inspiration Hub", ar: "مركز الوصفات والإلهام" },
        intro: { en: "Welcome to our Recipe & Inspiration Hub! Here you will find authentic Gulf-style dishes enhanced with our green cardamom, plus expert tips on flavour, aroma and spice pairing.", ar: "مرحباً بكم في مركز الوصفات والإلهام! ستجدون هنا أطباقاً خليجية أصيلة معززة بالهيل الأخضر، بالإضافة إلى نصائح الخبراء حول النكهة والرائحة وتنسيق التوابل." },
        ingredientsTitle: { en: "Ingredients", ar: "المكونات" },
        preparationTitle: { en: "Preparation", ar: "طريقة التحضير" }
    },
    contactPage: {
        title: { en: "Contact Us", ar: "اتصل بنا" },
        intro: { en: "We would love to hear from you. Whether you are a consumer with feedback, a potential partner, or someone wanting to learn more, please fill the form below, or contact us using the details.", ar: "نود سماع رأيك. سواء كنت مستهلكاً تقدّم ملاحظات، أو شريكاً محتملاً، أو شخصاً يرغب في معرفة المزيد - يرجى تعبئة النموذج أدناه، أو التواصل معنا عبر التفاصيل." },
        form_name: { en: "Your Name", ar: "اسمك" },
        form_email: { en: "Email Address", ar: "البريد الإلكتروني" },
        form_phone: { en: "Phone Number (Optional)", ar: "رقم الهاتف (اختياري)" },
        form_message: { en: "Your Message", ar: "رسالتك" },
        form_submit: { en: "Send Message", ar: "إرسال الرسالة" }
    },
    privacyPage: {
        title: { en: "Privacy Policy", ar: "سياسة الخصوصية" }
    },
    termsPage: {
        title: { en: "Terms & Conditions", ar: "الشروط والأحكام" }
    }
};