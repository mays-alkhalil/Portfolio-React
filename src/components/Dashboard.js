import React from "react";
import { useNavigate } from "react-router-dom";
import { useContent } from "../content/ContentContext";
import { logout } from "../content/auth";
import "./styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const { content, updateContent, resetContent } = useContent();

  const handleFileUpload = (file, onLoad) => {
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      onLoad(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const getLocalizedValue = (value, lang) => {
    if (typeof value === "string") {
      return value;
    }
    if (!value || typeof value !== "object") {
      return "";
    }
    return value[lang] ?? "";
  };

  const updateLocalizedValue = (path, lang, value) => {
    updateContent([...path, lang], value);
  };

  const updateArrayItemLocalized = (path, index, field, lang, value) => {
    const current = path.reduce((acc, key) => acc[key], content);
    const next = [...current];
    const currentField =
      typeof next[index][field] === "object" && next[index][field] !== null
        ? next[index][field]
        : {};
    next[index] = {
      ...next[index],
      [field]: {
        ...currentField,
        [lang]: value,
      },
    };
    updateContent(path, next);
  };

  const updateArrayValueLocalized = (path, index, lang, value) => {
    const current = path.reduce((acc, key) => acc[key], content);
    const next = [...current];
    const currentValue =
      typeof next[index] === "object" && next[index] !== null ? next[index] : {};
    next[index] = {
      ...currentValue,
      [lang]: value,
    };
    updateContent(path, next);
  };

  const updateArrayItem = (path, index, field, value) => {
    const current = path.reduce((acc, key) => acc[key], content);
    const next = [...current];
    next[index] = { ...next[index], [field]: value };
    updateContent(path, next);
  };

  const addArrayItem = (path, item) => {
    const current = path.reduce((acc, key) => acc[key], content);
    updateContent(path, [...current, item]);
  };

  const removeArrayItem = (path, index) => {
    const current = path.reduce((acc, key) => acc[key], content);
    updateContent(
      path,
      current.filter((_, itemIndex) => itemIndex !== index)
    );
  };

  return (
    <div className="dashboard-page">
      <section className="dashboard-hero">
        <div>
          <h1>لوحة التحكم بالمحتوى</h1>
          <p>
            عدّل كل أقسام الموقع مباشرة واحفظ البيانات في المتصفح بدون تعقيد.
          </p>
        </div>
        <div className="dashboard-actions">
          <button className="btn dashboard-reset" onClick={resetContent}>
            استعادة الإعدادات الافتراضية
          </button>
          <button
            className="btn btn-light"
            onClick={() => {
              logout();
              navigate("/dashboard/login");
            }}
          >
            تسجيل الخروج
          </button>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>ألوان الأقسام</h2>
        <div className="dashboard-grid">
          <label>
            خلفية البطل الرئيسي
            <input
              type="color"
              value={content.sectionStyles.featured.background}
              onChange={(event) =>
                updateContent(
                  ["sectionStyles", "featured", "background"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            نص البطل الرئيسي
            <input
              type="color"
              value={content.sectionStyles.featured.text}
              onChange={(event) =>
                updateContent(
                  ["sectionStyles", "featured", "text"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            خلفية قسم من أنا
            <input
              type="color"
              value={content.sectionStyles.about.background}
              onChange={(event) =>
                updateContent(
                  ["sectionStyles", "about", "background"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            نص قسم من أنا
            <input
              type="color"
              value={content.sectionStyles.about.text}
              onChange={(event) =>
                updateContent(
                  ["sectionStyles", "about", "text"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            خلفية المشاريع
            <input
              type="color"
              value={content.sectionStyles.projects.background}
              onChange={(event) =>
                updateContent(
                  ["sectionStyles", "projects", "background"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            نص المشاريع
            <input
              type="color"
              value={content.sectionStyles.projects.text}
              onChange={(event) =>
                updateContent(["sectionStyles", "projects", "text"], event.target.value)
              }
            />
          </label>
          <label>
            خلفية التواصل
            <input
              type="color"
              value={content.sectionStyles.contact.background}
              onChange={(event) =>
                updateContent(["sectionStyles", "contact", "background"], event.target.value)
              }
            />
          </label>
          <label>
            نص التواصل
            <input
              type="color"
              value={content.sectionStyles.contact.text}
              onChange={(event) =>
                updateContent(["sectionStyles", "contact", "text"], event.target.value)
              }
            />
          </label>
          <label>
            خلفية التوصيات
            <input
              type="color"
              value={content.sectionStyles.reviews.background}
              onChange={(event) =>
                updateContent(["sectionStyles", "reviews", "background"], event.target.value)
              }
            />
          </label>
          <label>
            نص التوصيات
            <input
              type="color"
              value={content.sectionStyles.reviews.text}
              onChange={(event) =>
                updateContent(["sectionStyles", "reviews", "text"], event.target.value)
              }
            />
          </label>
          <label>
            خلفية الخبرات
            <input
              type="color"
              value={content.sectionStyles.experience.background}
              onChange={(event) =>
                updateContent(["sectionStyles", "experience", "background"], event.target.value)
              }
            />
          </label>
          <label>
            نص الخبرات
            <input
              type="color"
              value={content.sectionStyles.experience.text}
              onChange={(event) =>
                updateContent(["sectionStyles", "experience", "text"], event.target.value)
              }
            />
          </label>
          <label>
            خلفية المشاريع المكتملة
            <input
              type="color"
              value={content.sectionStyles.completedProjects.background}
              onChange={(event) =>
                updateContent(
                  ["sectionStyles", "completedProjects", "background"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            نص المشاريع المكتملة
            <input
              type="color"
              value={content.sectionStyles.completedProjects.text}
              onChange={(event) =>
                updateContent(
                  ["sectionStyles", "completedProjects", "text"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            خلفية الفوتر
            <input
              type="color"
              value={content.sectionStyles.footer.background}
              onChange={(event) =>
                updateContent(["sectionStyles", "footer", "background"], event.target.value)
              }
            />
          </label>
          <label>
            نص الفوتر
            <input
              type="color"
              value={content.sectionStyles.footer.text}
              onChange={(event) =>
                updateContent(["sectionStyles", "footer", "text"], event.target.value)
              }
            />
          </label>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>ألوان الأقسام (دارك مود)</h2>
        <div className="dashboard-grid">
          <label>
            خلفية البطل الرئيسي
            <input
              type="color"
              value={content.sectionStylesDark.featured.background}
              onChange={(event) =>
                updateContent(
                  ["sectionStylesDark", "featured", "background"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            نص البطل الرئيسي
            <input
              type="color"
              value={content.sectionStylesDark.featured.text}
              onChange={(event) =>
                updateContent(
                  ["sectionStylesDark", "featured", "text"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            خلفية قسم من أنا
            <input
              type="color"
              value={content.sectionStylesDark.about.background}
              onChange={(event) =>
                updateContent(
                  ["sectionStylesDark", "about", "background"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            نص قسم من أنا
            <input
              type="color"
              value={content.sectionStylesDark.about.text}
              onChange={(event) =>
                updateContent(["sectionStylesDark", "about", "text"], event.target.value)
              }
            />
          </label>
          <label>
            خلفية المشاريع
            <input
              type="color"
              value={content.sectionStylesDark.projects.background}
              onChange={(event) =>
                updateContent(
                  ["sectionStylesDark", "projects", "background"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            نص المشاريع
            <input
              type="color"
              value={content.sectionStylesDark.projects.text}
              onChange={(event) =>
                updateContent(["sectionStylesDark", "projects", "text"], event.target.value)
              }
            />
          </label>
          <label>
            خلفية التواصل
            <input
              type="color"
              value={content.sectionStylesDark.contact.background}
              onChange={(event) =>
                updateContent(
                  ["sectionStylesDark", "contact", "background"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            نص التواصل
            <input
              type="color"
              value={content.sectionStylesDark.contact.text}
              onChange={(event) =>
                updateContent(["sectionStylesDark", "contact", "text"], event.target.value)
              }
            />
          </label>
          <label>
            خلفية التوصيات
            <input
              type="color"
              value={content.sectionStylesDark.reviews.background}
              onChange={(event) =>
                updateContent(
                  ["sectionStylesDark", "reviews", "background"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            نص التوصيات
            <input
              type="color"
              value={content.sectionStylesDark.reviews.text}
              onChange={(event) =>
                updateContent(["sectionStylesDark", "reviews", "text"], event.target.value)
              }
            />
          </label>
          <label>
            خلفية الخبرات
            <input
              type="color"
              value={content.sectionStylesDark.experience.background}
              onChange={(event) =>
                updateContent(
                  ["sectionStylesDark", "experience", "background"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            نص الخبرات
            <input
              type="color"
              value={content.sectionStylesDark.experience.text}
              onChange={(event) =>
                updateContent(["sectionStylesDark", "experience", "text"], event.target.value)
              }
            />
          </label>
          <label>
            خلفية المشاريع المكتملة
            <input
              type="color"
              value={content.sectionStylesDark.completedProjects.background}
              onChange={(event) =>
                updateContent(
                  ["sectionStylesDark", "completedProjects", "background"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            نص المشاريع المكتملة
            <input
              type="color"
              value={content.sectionStylesDark.completedProjects.text}
              onChange={(event) =>
                updateContent(
                  ["sectionStylesDark", "completedProjects", "text"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            خلفية الفوتر
            <input
              type="color"
              value={content.sectionStylesDark.footer.background}
              onChange={(event) =>
                updateContent(
                  ["sectionStylesDark", "footer", "background"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            نص الفوتر
            <input
              type="color"
              value={content.sectionStylesDark.footer.text}
              onChange={(event) =>
                updateContent(["sectionStylesDark", "footer", "text"], event.target.value)
              }
            />
          </label>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>البطل الرئيسي</h2>
        <div className="dashboard-grid">
          <div className="dashboard-lang-row">
            <label className="dashboard-lang-field">
              جملة الترحيب (عربي)
              <input
                type="text"
                value={getLocalizedValue(content.featured.greeting, "ar")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["featured", "greeting"],
                    "ar",
                    event.target.value
                  )
                }
              />
            </label>
            <label className="dashboard-lang-field">
              Greeting (English)
              <input
                type="text"
                value={getLocalizedValue(content.featured.greeting, "en")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["featured", "greeting"],
                    "en",
                    event.target.value
                  )
                }
              />
            </label>
          </div>
          <div className="dashboard-lang-row">
            <label className="dashboard-lang-field">
              نص المقدمة (عربي)
              <textarea
                value={getLocalizedValue(content.featured.introText, "ar")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["featured", "introText"],
                    "ar",
                    event.target.value
                  )
                }
              />
            </label>
            <label className="dashboard-lang-field">
              Intro text (English)
              <textarea
                value={getLocalizedValue(content.featured.introText, "en")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["featured", "introText"],
                    "en",
                    event.target.value
                  )
                }
              />
            </label>
          </div>
          <div className="dashboard-lang-row">
            <label className="dashboard-lang-field">
              زر التوظيف (عربي)
              <input
                type="text"
                value={getLocalizedValue(content.featured.hireButtonLabel, "ar")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["featured", "hireButtonLabel"],
                    "ar",
                    event.target.value
                  )
                }
              />
            </label>
            <label className="dashboard-lang-field">
              Hire button (English)
              <input
                type="text"
                value={getLocalizedValue(content.featured.hireButtonLabel, "en")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["featured", "hireButtonLabel"],
                    "en",
                    event.target.value
                  )
                }
              />
            </label>
          </div>
          <label>
            هدف زر التوظيف (ID)
            <input
              type="text"
              value={content.featured.hireButtonTarget}
              onChange={(event) =>
                updateContent(
                  ["featured", "hireButtonTarget"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            رابط السيرة الذاتية
            <input
              type="text"
              value={content.featured.cv.link}
              onChange={(event) =>
                updateContent(["featured", "cv", "link"], event.target.value)
              }
            />
          </label>
          <label>
            رفع السيرة الذاتية (PDF)
            <input
              type="file"
              accept=".pdf"
              onChange={(event) =>
                handleFileUpload(event.target.files?.[0], (result) => {
                  updateContent(["featured", "cv", "link"], result);
                  updateContent(
                    ["featured", "cv", "filename"],
                    event.target.files?.[0]?.name || content.featured.cv.filename
                  );
                })
              }
            />
          </label>
          <div className="dashboard-lang-row">
            <label className="dashboard-lang-field">
              عنوان السيرة الذاتية (عربي)
              <input
                type="text"
                value={getLocalizedValue(content.featured.cv.label, "ar")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["featured", "cv", "label"],
                    "ar",
                    event.target.value
                  )
                }
              />
            </label>
            <label className="dashboard-lang-field">
              CV label (English)
              <input
                type="text"
                value={getLocalizedValue(content.featured.cv.label, "en")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["featured", "cv", "label"],
                    "en",
                    event.target.value
                  )
                }
              />
            </label>
          </div>
          <label>
            اسم الملف
            <input
              type="text"
              value={content.featured.cv.filename}
              onChange={(event) =>
                updateContent(
                  ["featured", "cv", "filename"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            صورة البروفايل
            <input
              type="text"
              value={content.featured.image.src}
              onChange={(event) =>
                updateContent(["featured", "image", "src"], event.target.value)
              }
            />
          </label>
          <label>
            رفع صورة البروفايل
            <input
              type="file"
              accept="image/*"
              onChange={(event) =>
                handleFileUpload(event.target.files?.[0], (result) => {
                  updateContent(["featured", "image", "src"], result);
                })
              }
            />
          </label>
          <div className="dashboard-lang-row">
            <label className="dashboard-lang-field">
              وصف الصورة (عربي)
              <input
                type="text"
                value={getLocalizedValue(content.featured.image.alt, "ar")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["featured", "image", "alt"],
                    "ar",
                    event.target.value
                  )
                }
              />
            </label>
            <label className="dashboard-lang-field">
              Image alt (English)
              <input
                type="text"
                value={getLocalizedValue(content.featured.image.alt, "en")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["featured", "image", "alt"],
                    "en",
                    event.target.value
                  )
                }
              />
            </label>
          </div>
          <label>
            حجم صورة البروفايل - لابتوب (px)
            <input
              type="number"
              value={content.featured.image.sizes.desktop}
              onChange={(event) =>
                updateContent(
                  ["featured", "image", "sizes", "desktop"],
                  Number(event.target.value)
                )
              }
            />
          </label>
          <label>
            حجم صورة البروفايل - تابلت (px)
            <input
              type="number"
              value={content.featured.image.sizes.tablet}
              onChange={(event) =>
                updateContent(
                  ["featured", "image", "sizes", "tablet"],
                  Number(event.target.value)
                )
              }
            />
          </label>
          <label>
            حجم صورة البروفايل - موبايل (px)
            <input
              type="number"
              value={content.featured.image.sizes.mobile}
              onChange={(event) =>
                updateContent(
                  ["featured", "image", "sizes", "mobile"],
                  Number(event.target.value)
                )
              }
            />
          </label>
        </div>

        <div className="dashboard-list">
          <h3>المسميات المتحركة</h3>
          {content.featured.typedRoles.map((role, index) => (
            <div key={`role-${index}`} className="dashboard-row">
              <input
                type="text"
                value={getLocalizedValue(role, "ar")}
                placeholder="عربي"
                onChange={(event) =>
                  updateArrayValueLocalized(
                    ["featured", "typedRoles"],
                    index,
                    "ar",
                    event.target.value
                  )
                }
              />
              <input
                type="text"
                value={getLocalizedValue(role, "en")}
                placeholder="English"
                onChange={(event) =>
                  updateArrayValueLocalized(
                    ["featured", "typedRoles"],
                    index,
                    "en",
                    event.target.value
                  )
                }
              />
              <button
                type="button"
                className="btn btn-light"
                onClick={() => removeArrayItem(["featured", "typedRoles"], index)}
              >
                حذف
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn"
            onClick={() =>
              addArrayItem(["featured", "typedRoles"], {
                ar: "عنوان جديد",
                en: "New title",
              })
            }
          >
            إضافة مسمى
          </button>
        </div>

        <div className="dashboard-grid">
          <label>
            بريد التواصل
            <input
              type="text"
              value={content.featured.social.email}
              onChange={(event) =>
                updateContent(["featured", "social", "email"], event.target.value)
              }
            />
          </label>
          <label>
            واتساب
            <input
              type="text"
              value={content.featured.social.whatsapp}
              onChange={(event) =>
                updateContent(
                  ["featured", "social", "whatsapp"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            لينكدإن
            <input
              type="text"
              value={content.featured.social.linkedin}
              onChange={(event) =>
                updateContent(
                  ["featured", "social", "linkedin"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            GitHub
            <input
              type="text"
              value={content.featured.social.github}
              onChange={(event) =>
                updateContent(["featured", "social", "github"], event.target.value)
              }
            />
          </label>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>قسم من أنا</h2>
        <div className="dashboard-grid">
          <div className="dashboard-lang-row">
            <label className="dashboard-lang-field">
              العنوان (عربي)
              <input
                type="text"
                value={getLocalizedValue(content.about.title, "ar")}
                onChange={(event) =>
                  updateLocalizedValue(["about", "title"], "ar", event.target.value)
                }
              />
            </label>
            <label className="dashboard-lang-field">
              Title (English)
              <input
                type="text"
                value={getLocalizedValue(content.about.title, "en")}
                onChange={(event) =>
                  updateLocalizedValue(["about", "title"], "en", event.target.value)
                }
              />
            </label>
          </div>
          <div className="dashboard-lang-row">
            <label className="dashboard-lang-field">
              العنوان الفرعي (عربي)
              <input
                type="text"
                value={getLocalizedValue(content.about.subtitle, "ar")}
                onChange={(event) =>
                  updateLocalizedValue(["about", "subtitle"], "ar", event.target.value)
                }
              />
            </label>
            <label className="dashboard-lang-field">
              Subtitle (English)
              <input
                type="text"
                value={getLocalizedValue(content.about.subtitle, "en")}
                onChange={(event) =>
                  updateLocalizedValue(["about", "subtitle"], "en", event.target.value)
                }
              />
            </label>
          </div>
          <div className="dashboard-lang-row">
            <label className="dashboard-lang-field">
              العنوان الوظيفي (عربي)
              <input
                type="text"
                value={getLocalizedValue(content.about.roleHeadline, "ar")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["about", "roleHeadline"],
                    "ar",
                    event.target.value
                  )
                }
              />
            </label>
            <label className="dashboard-lang-field">
              Role headline (English)
              <input
                type="text"
                value={getLocalizedValue(content.about.roleHeadline, "en")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["about", "roleHeadline"],
                    "en",
                    event.target.value
                  )
                }
              />
            </label>
          </div>
          <label>
            صورة القسم
            <input
              type="text"
              value={content.about.image.src}
              onChange={(event) =>
                updateContent(["about", "image", "src"], event.target.value)
              }
            />
          </label>
          <label>
            رفع صورة قسم من أنا
            <input
              type="file"
              accept="image/*"
              onChange={(event) =>
                handleFileUpload(event.target.files?.[0], (result) => {
                  updateContent(["about", "image", "src"], result);
                })
              }
            />
          </label>
          <div className="dashboard-lang-row">
            <label className="dashboard-lang-field">
              وصف الصورة (عربي)
              <input
                type="text"
                value={getLocalizedValue(content.about.image.alt, "ar")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["about", "image", "alt"],
                    "ar",
                    event.target.value
                  )
                }
              />
            </label>
            <label className="dashboard-lang-field">
              Image alt (English)
              <input
                type="text"
                value={getLocalizedValue(content.about.image.alt, "en")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["about", "image", "alt"],
                    "en",
                    event.target.value
                  )
                }
              />
            </label>
          </div>
          <label>
            حجم صورة من أنا - لابتوب (px)
            <input
              type="number"
              value={content.about.image.sizes.desktop}
              onChange={(event) =>
                updateContent(
                  ["about", "image", "sizes", "desktop"],
                  Number(event.target.value)
                )
              }
            />
          </label>
          <label>
            حجم صورة من أنا - تابلت (px)
            <input
              type="number"
              value={content.about.image.sizes.tablet}
              onChange={(event) =>
                updateContent(
                  ["about", "image", "sizes", "tablet"],
                  Number(event.target.value)
                )
              }
            />
          </label>
          <label>
            حجم صورة من أنا - موبايل (px)
            <input
              type="number"
              value={content.about.image.sizes.mobile}
              onChange={(event) =>
                updateContent(
                  ["about", "image", "sizes", "mobile"],
                  Number(event.target.value)
                )
              }
            />
          </label>
        </div>

        <div className="dashboard-list">
          <h3>الفقرات</h3>
          {content.about.paragraphs.map((paragraph, index) => (
            <div key={`about-paragraph-${index}`} className="dashboard-row">
              <textarea
                value={getLocalizedValue(paragraph, "ar")}
                placeholder="عربي"
                onChange={(event) =>
                  updateArrayValueLocalized(
                    ["about", "paragraphs"],
                    index,
                    "ar",
                    event.target.value
                  )
                }
              />
              <textarea
                value={getLocalizedValue(paragraph, "en")}
                placeholder="English"
                onChange={(event) =>
                  updateArrayValueLocalized(
                    ["about", "paragraphs"],
                    index,
                    "en",
                    event.target.value
                  )
                }
              />
              <button
                type="button"
                className="btn btn-light"
                onClick={() => removeArrayItem(["about", "paragraphs"], index)}
              >
                حذف
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn"
            onClick={() =>
              addArrayItem(["about", "paragraphs"], {
                ar: "فقرة جديدة",
                en: "New paragraph",
              })
            }
          >
            إضافة فقرة
          </button>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>روابط المشاريع</h2>
        <div className="dashboard-lang-row">
          <label className="dashboard-lang-field">
            عنوان القسم (عربي)
            <input
              type="text"
              value={getLocalizedValue(content.projects.title, "ar")}
              onChange={(event) =>
                updateLocalizedValue(
                  ["projects", "title"],
                  "ar",
                  event.target.value
                )
              }
            />
          </label>
          <label className="dashboard-lang-field">
            Section title (English)
            <input
              type="text"
              value={getLocalizedValue(content.projects.title, "en")}
              onChange={(event) =>
                updateLocalizedValue(
                  ["projects", "title"],
                  "en",
                  event.target.value
                )
              }
            />
          </label>
        </div>
        <div className="dashboard-list">
          {content.projects.cards.map((card, index) => (
            <div key={`project-card-${index}`} className="dashboard-card">
              <div className="dashboard-lang-row">
                <label className="dashboard-lang-field">
                  العنوان (عربي)
                  <input
                    type="text"
                    value={getLocalizedValue(card.title, "ar")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["projects", "cards"],
                        index,
                        "title",
                        "ar",
                        event.target.value
                      )
                    }
                  />
                </label>
                <label className="dashboard-lang-field">
                  Title (English)
                  <input
                    type="text"
                    value={getLocalizedValue(card.title, "en")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["projects", "cards"],
                        index,
                        "title",
                        "en",
                        event.target.value
                      )
                    }
                  />
                </label>
              </div>
              <div className="dashboard-lang-row">
                <label className="dashboard-lang-field">
                  الوصف القصير (عربي)
                  <input
                    type="text"
                    value={getLocalizedValue(card.label, "ar")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["projects", "cards"],
                        index,
                        "label",
                        "ar",
                        event.target.value
                      )
                    }
                  />
                </label>
                <label className="dashboard-lang-field">
                  Label (English)
                  <input
                    type="text"
                    value={getLocalizedValue(card.label, "en")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["projects", "cards"],
                        index,
                        "label",
                        "en",
                        event.target.value
                      )
                    }
                  />
                </label>
              </div>
              <label>
                أيقونة (Class)
                <input
                  type="text"
                  value={card.iconClass}
                  onChange={(event) =>
                    updateArrayItem(
                      ["projects", "cards"],
                      index,
                      "iconClass",
                      event.target.value
                    )
                  }
                />
              </label>
              <label>
                الرابط
                <input
                  type="text"
                  value={card.link}
                  onChange={(event) =>
                    updateArrayItem(
                      ["projects", "cards"],
                      index,
                      "link",
                      event.target.value
                    )
                  }
                />
              </label>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => removeArrayItem(["projects", "cards"], index)}
              >
                حذف البطاقة
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn"
            onClick={() =>
              addArrayItem(["projects", "cards"], {
                title: { ar: "بطاقة جديدة", en: "New card" },
                label: { ar: "وصف مختصر", en: "Short label" },
                iconClass: "uil uil-star",
                link: "/",
              })
            }
          >
            إضافة بطاقة
          </button>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>قسم التواصل</h2>
        <div className="dashboard-grid">
          <div className="dashboard-lang-row">
            <label className="dashboard-lang-field">
              العنوان (عربي)
              <input
                type="text"
                value={getLocalizedValue(content.contact.title, "ar")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["contact", "title"],
                    "ar",
                    event.target.value
                  )
                }
              />
            </label>
            <label className="dashboard-lang-field">
              Title (English)
              <input
                type="text"
                value={getLocalizedValue(content.contact.title, "en")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["contact", "title"],
                    "en",
                    event.target.value
                  )
                }
              />
            </label>
          </div>
          <div className="dashboard-lang-row">
            <label className="dashboard-lang-field">
              العنوان الفرعي (عربي)
              <input
                type="text"
                value={getLocalizedValue(content.contact.subtitle, "ar")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["contact", "subtitle"],
                    "ar",
                    event.target.value
                  )
                }
              />
            </label>
            <label className="dashboard-lang-field">
              Subtitle (English)
              <input
                type="text"
                value={getLocalizedValue(content.contact.subtitle, "en")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["contact", "subtitle"],
                    "en",
                    event.target.value
                  )
                }
              />
            </label>
          </div>
          <label>
            البريد الإلكتروني
            <input
              type="text"
              value={content.contact.email}
              onChange={(event) =>
                updateContent(["contact", "email"], event.target.value)
              }
            />
          </label>
          <label>
            رقم الهاتف
            <input
              type="text"
              value={content.contact.phone}
              onChange={(event) =>
                updateContent(["contact", "phone"], event.target.value)
              }
            />
          </label>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>التجارب المهنية</h2>
        <div className="dashboard-lang-row">
          <label className="dashboard-lang-field">
            عنوان القسم (عربي)
            <input
              type="text"
              value={getLocalizedValue(content.experience.title, "ar")}
              onChange={(event) =>
                updateLocalizedValue(
                  ["experience", "title"],
                  "ar",
                  event.target.value
                )
              }
            />
          </label>
          <label className="dashboard-lang-field">
            Section title (English)
            <input
              type="text"
              value={getLocalizedValue(content.experience.title, "en")}
              onChange={(event) =>
                updateLocalizedValue(
                  ["experience", "title"],
                  "en",
                  event.target.value
                )
              }
            />
          </label>
        </div>
        <div className="dashboard-list">
          {content.experience.items.map((item, index) => (
            <div key={`experience-${index}`} className="dashboard-card">
              <div className="dashboard-lang-row">
                <label className="dashboard-lang-field">
                  المسمى الوظيفي (عربي)
                  <input
                    type="text"
                    value={getLocalizedValue(item.role, "ar")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["experience", "items"],
                        index,
                        "role",
                        "ar",
                        event.target.value
                      )
                    }
                  />
                </label>
                <label className="dashboard-lang-field">
                  Role (English)
                  <input
                    type="text"
                    value={getLocalizedValue(item.role, "en")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["experience", "items"],
                        index,
                        "role",
                        "en",
                        event.target.value
                      )
                    }
                  />
                </label>
              </div>
              <label>
                المدة الزمنية
                <input
                  type="text"
                  value={item.duration}
                  onChange={(event) =>
                    updateArrayItem(
                      ["experience", "items"],
                      index,
                      "duration",
                      event.target.value
                    )
                  }
                />
              </label>
              <div className="dashboard-lang-row">
                <label className="dashboard-lang-field">
                  الوصف (عربي)
                  <textarea
                    value={getLocalizedValue(item.description, "ar")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["experience", "items"],
                        index,
                        "description",
                        "ar",
                        event.target.value
                      )
                    }
                  />
                </label>
                <label className="dashboard-lang-field">
                  Description (English)
                  <textarea
                    value={getLocalizedValue(item.description, "en")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["experience", "items"],
                        index,
                        "description",
                        "en",
                        event.target.value
                      )
                    }
                  />
                </label>
              </div>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => removeArrayItem(["experience", "items"], index)}
              >
                حذف الخبرة
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn"
            onClick={() =>
              addArrayItem(["experience", "items"], {
                role: { ar: "خبرة جديدة", en: "New role" },
                duration: "الفترة الزمنية",
                description: { ar: "تفاصيل الخبرة", en: "Experience details" },
              })
            }
          >
            إضافة خبرة
          </button>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>المشاريع المكتملة</h2>
        <div className="dashboard-lang-row">
          <label className="dashboard-lang-field">
            عنوان القسم (عربي)
            <input
              type="text"
              value={getLocalizedValue(content.completedProjects.title, "ar")}
              onChange={(event) =>
                updateLocalizedValue(
                  ["completedProjects", "title"],
                  "ar",
                  event.target.value
                )
              }
            />
          </label>
          <label className="dashboard-lang-field">
            Section title (English)
            <input
              type="text"
              value={getLocalizedValue(content.completedProjects.title, "en")}
              onChange={(event) =>
                updateLocalizedValue(
                  ["completedProjects", "title"],
                  "en",
                  event.target.value
                )
              }
            />
          </label>
        </div>
        <div className="dashboard-list">
          {content.completedProjects.items.map((item, index) => (
            <div key={`completed-project-${index}`} className="dashboard-card">
              <div className="dashboard-lang-row">
                <label className="dashboard-lang-field">
                  العنوان (عربي)
                  <input
                    type="text"
                    value={getLocalizedValue(item.title, "ar")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["completedProjects", "items"],
                        index,
                        "title",
                        "ar",
                        event.target.value
                      )
                    }
                  />
                </label>
                <label className="dashboard-lang-field">
                  Title (English)
                  <input
                    type="text"
                    value={getLocalizedValue(item.title, "en")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["completedProjects", "items"],
                        index,
                        "title",
                        "en",
                        event.target.value
                      )
                    }
                  />
                </label>
              </div>
              <div className="dashboard-lang-row">
                <label className="dashboard-lang-field">
                  الوصف (عربي)
                  <textarea
                    value={getLocalizedValue(item.description, "ar")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["completedProjects", "items"],
                        index,
                        "description",
                        "ar",
                        event.target.value
                      )
                    }
                  />
                </label>
                <label className="dashboard-lang-field">
                  Description (English)
                  <textarea
                    value={getLocalizedValue(item.description, "en")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["completedProjects", "items"],
                        index,
                        "description",
                        "en",
                        event.target.value
                      )
                    }
                  />
                </label>
              </div>
              <label>
                رابط المشروع
                <input
                  type="text"
                  value={item.link}
                  onChange={(event) =>
                    updateArrayItem(
                      ["completedProjects", "items"],
                      index,
                      "link",
                      event.target.value
                    )
                  }
                />
              </label>
              <div className="dashboard-lang-row">
                <label className="dashboard-lang-field">
                  نص الزر (عربي)
                  <input
                    type="text"
                    value={getLocalizedValue(item.cta, "ar")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["completedProjects", "items"],
                        index,
                        "cta",
                        "ar",
                        event.target.value
                      )
                    }
                  />
                </label>
                <label className="dashboard-lang-field">
                  CTA (English)
                  <input
                    type="text"
                    value={getLocalizedValue(item.cta, "en")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["completedProjects", "items"],
                        index,
                        "cta",
                        "en",
                        event.target.value
                      )
                    }
                  />
                </label>
              </div>
              <button
                type="button"
                className="btn btn-light"
                onClick={() =>
                  removeArrayItem(["completedProjects", "items"], index)
                }
              >
                حذف المشروع
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn"
            onClick={() =>
              addArrayItem(["completedProjects", "items"], {
                title: { ar: "مشروع جديد", en: "New project" },
                description: {
                  ar: "وصف مختصر للمشروع",
                  en: "Short project description",
                },
                link: "https://",
                cta: { ar: "زيارة المشروع", en: "Visit project" },
              })
            }
          >
            إضافة مشروع
          </button>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>التوصيات</h2>
        <div className="dashboard-grid">
          <div className="dashboard-lang-row">
            <label className="dashboard-lang-field">
              عنوان القسم (عربي)
              <input
                type="text"
                value={getLocalizedValue(content.reviews.title, "ar")}
                onChange={(event) =>
                  updateLocalizedValue(["reviews", "title"], "ar", event.target.value)
                }
              />
            </label>
            <label className="dashboard-lang-field">
              Title (English)
              <input
                type="text"
                value={getLocalizedValue(content.reviews.title, "en")}
                onChange={(event) =>
                  updateLocalizedValue(["reviews", "title"], "en", event.target.value)
                }
              />
            </label>
          </div>
          <div className="dashboard-lang-row">
            <label className="dashboard-lang-field">
              العنوان الفرعي (عربي)
              <input
                type="text"
                value={getLocalizedValue(content.reviews.subtitle, "ar")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["reviews", "subtitle"],
                    "ar",
                    event.target.value
                  )
                }
              />
            </label>
            <label className="dashboard-lang-field">
              Subtitle (English)
              <input
                type="text"
                value={getLocalizedValue(content.reviews.subtitle, "en")}
                onChange={(event) =>
                  updateLocalizedValue(
                    ["reviews", "subtitle"],
                    "en",
                    event.target.value
                  )
                }
              />
            </label>
          </div>
        </div>
        <div className="dashboard-list">
          {content.reviews.items.map((item, index) => (
            <div key={`review-${index}`} className="dashboard-card">
              <div className="dashboard-lang-row">
                <label className="dashboard-lang-field">
                  الاسم (عربي)
                  <input
                    type="text"
                    value={getLocalizedValue(item.name, "ar")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["reviews", "items"],
                        index,
                        "name",
                        "ar",
                        event.target.value
                      )
                    }
                  />
                </label>
                <label className="dashboard-lang-field">
                  Name (English)
                  <input
                    type="text"
                    value={getLocalizedValue(item.name, "en")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["reviews", "items"],
                        index,
                        "name",
                        "en",
                        event.target.value
                      )
                    }
                  />
                </label>
              </div>
              <div className="dashboard-lang-row">
                <label className="dashboard-lang-field">
                  الوظيفة (عربي)
                  <input
                    type="text"
                    value={getLocalizedValue(item.role, "ar")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["reviews", "items"],
                        index,
                        "role",
                        "ar",
                        event.target.value
                      )
                    }
                  />
                </label>
                <label className="dashboard-lang-field">
                  Role (English)
                  <input
                    type="text"
                    value={getLocalizedValue(item.role, "en")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["reviews", "items"],
                        index,
                        "role",
                        "en",
                        event.target.value
                      )
                    }
                  />
                </label>
              </div>
              <div className="dashboard-lang-row">
                <label className="dashboard-lang-field">
                  النص (عربي)
                  <textarea
                    value={getLocalizedValue(item.text, "ar")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["reviews", "items"],
                        index,
                        "text",
                        "ar",
                        event.target.value
                      )
                    }
                  />
                </label>
                <label className="dashboard-lang-field">
                  Text (English)
                  <textarea
                    value={getLocalizedValue(item.text, "en")}
                    onChange={(event) =>
                      updateArrayItemLocalized(
                        ["reviews", "items"],
                        index,
                        "text",
                        "en",
                        event.target.value
                      )
                    }
                  />
                </label>
              </div>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => removeArrayItem(["reviews", "items"], index)}
              >
                حذف التوصية
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn"
            onClick={() =>
              addArrayItem(["reviews", "items"], {
                name: { ar: "عميل جديد", en: "New client" },
                role: { ar: "المنصب", en: "Role" },
                text: { ar: "نص التوصية", en: "Testimonial text" },
              })
            }
          >
            إضافة توصية
          </button>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>تذييل الصفحة</h2>
        <div className="dashboard-grid">
          <label>
            الاسم في حقوق النشر
            <input
              type="text"
              value={content.footer.copyrightName}
              onChange={(event) =>
                updateContent(
                  ["footer", "copyrightName"],
                  event.target.value
                )
              }
            />
          </label>
          <label>
            السنة
            <input
              type="text"
              value={content.footer.year}
              onChange={(event) =>
                updateContent(["footer", "year"], event.target.value)
              }
            />
          </label>
        </div>

        <div className="dashboard-list">
          <h3>روابط التذييل</h3>
          {content.footer.links.map((link, index) => (
            <div key={`footer-link-${index}`} className="dashboard-row">
              <input
                type="text"
                value={getLocalizedValue(link.label, "ar")}
                placeholder="عربي"
                onChange={(event) =>
                  updateArrayItemLocalized(
                    ["footer", "links"],
                    index,
                    "label",
                    "ar",
                    event.target.value
                  )
                }
              />
              <input
                type="text"
                value={getLocalizedValue(link.label, "en")}
                placeholder="English"
                onChange={(event) =>
                  updateArrayItemLocalized(
                    ["footer", "links"],
                    index,
                    "label",
                    "en",
                    event.target.value
                  )
                }
              />
              <input
                type="text"
                value={link.href}
                onChange={(event) =>
                  updateArrayItem(
                    ["footer", "links"],
                    index,
                    "href",
                    event.target.value
                  )
                }
              />
              <button
                type="button"
                className="btn btn-light"
                onClick={() => removeArrayItem(["footer", "links"], index)}
              >
                حذف
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn"
            onClick={() =>
              addArrayItem(["footer", "links"], {
                label: { ar: "رابط جديد", en: "New link" },
                href: "#",
              })
            }
          >
            إضافة رابط
          </button>
        </div>

        <div className="dashboard-list">
          <h3>أيقونات التواصل</h3>
          {content.footer.social.map((link, index) => (
            <div key={`footer-social-${index}`} className="dashboard-row">
              <input
                type="text"
                value={link.iconClass}
                onChange={(event) =>
                  updateArrayItem(
                    ["footer", "social"],
                    index,
                    "iconClass",
                    event.target.value
                  )
                }
              />
              <input
                type="text"
                value={link.href}
                onChange={(event) =>
                  updateArrayItem(
                    ["footer", "social"],
                    index,
                    "href",
                    event.target.value
                  )
                }
              />
              <button
                type="button"
                className="btn btn-light"
                onClick={() => removeArrayItem(["footer", "social"], index)}
              >
                حذف
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn"
            onClick={() =>
              addArrayItem(["footer", "social"], {
                iconClass: "fab fa-link",
                href: "https://",
              })
            }
          >
            إضافة أيقونة
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
