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

  const updateArrayItem = (path, index, field, value) => {
    const current = path.reduce((acc, key) => acc[key], content);
    const next = [...current];
    next[index] = { ...next[index], [field]: value };
    updateContent(path, next);
  };

  const updateArrayValue = (path, index, value) => {
    const current = path.reduce((acc, key) => acc[key], content);
    const next = [...current];
    next[index] = value;
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
        <h2>البطل الرئيسي</h2>
        <div className="dashboard-grid">
          <label>
            جملة الترحيب
            <input
              type="text"
              value={content.featured.greeting}
              onChange={(event) =>
                updateContent(["featured", "greeting"], event.target.value)
              }
            />
          </label>
          <label>
            نص المقدمة
            <textarea
              value={content.featured.introText}
              onChange={(event) =>
                updateContent(["featured", "introText"], event.target.value)
              }
            />
          </label>
          <label>
            زر التوظيف
            <input
              type="text"
              value={content.featured.hireButtonLabel}
              onChange={(event) =>
                updateContent(
                  ["featured", "hireButtonLabel"],
                  event.target.value
                )
              }
            />
          </label>
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
          <label>
            عنوان السيرة الذاتية
            <input
              type="text"
              value={content.featured.cv.label}
              onChange={(event) =>
                updateContent(["featured", "cv", "label"], event.target.value)
              }
            />
          </label>
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
          <label>
            وصف الصورة
            <input
              type="text"
              value={content.featured.image.alt}
              onChange={(event) =>
                updateContent(["featured", "image", "alt"], event.target.value)
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
                value={role}
                onChange={(event) =>
                  updateArrayValue(["featured", "typedRoles"], index, event.target.value)
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
              addArrayItem(["featured", "typedRoles"], "عنوان جديد")
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
          <label>
            العنوان
            <input
              type="text"
              value={content.about.title}
              onChange={(event) =>
                updateContent(["about", "title"], event.target.value)
              }
            />
          </label>
          <label>
            العنوان الفرعي
            <input
              type="text"
              value={content.about.subtitle}
              onChange={(event) =>
                updateContent(["about", "subtitle"], event.target.value)
              }
            />
          </label>
          <label>
            العنوان الوظيفي
            <input
              type="text"
              value={content.about.roleHeadline}
              onChange={(event) =>
                updateContent(["about", "roleHeadline"], event.target.value)
              }
            />
          </label>
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
          <label>
            وصف الصورة
            <input
              type="text"
              value={content.about.image.alt}
              onChange={(event) =>
                updateContent(["about", "image", "alt"], event.target.value)
              }
            />
          </label>
        </div>

        <div className="dashboard-list">
          <h3>الفقرات</h3>
          {content.about.paragraphs.map((paragraph, index) => (
            <div key={`about-paragraph-${index}`} className="dashboard-row">
              <textarea
                value={paragraph}
                onChange={(event) =>
                  updateArrayValue(["about", "paragraphs"], index, event.target.value)
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
              addArrayItem(["about", "paragraphs"], "فقرة جديدة")
            }
          >
            إضافة فقرة
          </button>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>روابط المشاريع</h2>
        <label>
          عنوان القسم
          <input
            type="text"
            value={content.projects.title}
            onChange={(event) =>
              updateContent(["projects", "title"], event.target.value)
            }
          />
        </label>
        <div className="dashboard-list">
          {content.projects.cards.map((card, index) => (
            <div key={`project-card-${index}`} className="dashboard-card">
              <label>
                العنوان
                <input
                  type="text"
                  value={card.title}
                  onChange={(event) =>
                    updateArrayItem(
                      ["projects", "cards"],
                      index,
                      "title",
                      event.target.value
                    )
                  }
                />
              </label>
              <label>
                الوصف القصير
                <input
                  type="text"
                  value={card.label}
                  onChange={(event) =>
                    updateArrayItem(
                      ["projects", "cards"],
                      index,
                      "label",
                      event.target.value
                    )
                  }
                />
              </label>
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
                title: "بطاقة جديدة",
                label: "وصف مختصر",
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
          <label>
            العنوان
            <input
              type="text"
              value={content.contact.title}
              onChange={(event) =>
                updateContent(["contact", "title"], event.target.value)
              }
            />
          </label>
          <label>
            العنوان الفرعي
            <input
              type="text"
              value={content.contact.subtitle}
              onChange={(event) =>
                updateContent(["contact", "subtitle"], event.target.value)
              }
            />
          </label>
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
        <label>
          عنوان القسم
          <input
            type="text"
            value={content.experience.title}
            onChange={(event) =>
              updateContent(["experience", "title"], event.target.value)
            }
          />
        </label>
        <div className="dashboard-list">
          {content.experience.items.map((item, index) => (
            <div key={`experience-${index}`} className="dashboard-card">
              <label>
                المسمى الوظيفي
                <input
                  type="text"
                  value={item.role}
                  onChange={(event) =>
                    updateArrayItem(
                      ["experience", "items"],
                      index,
                      "role",
                      event.target.value
                    )
                  }
                />
              </label>
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
              <label>
                الوصف
                <textarea
                  value={item.description}
                  onChange={(event) =>
                    updateArrayItem(
                      ["experience", "items"],
                      index,
                      "description",
                      event.target.value
                    )
                  }
                />
              </label>
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
                role: "خبرة جديدة",
                duration: "الفترة الزمنية",
                description: "تفاصيل الخبرة",
              })
            }
          >
            إضافة خبرة
          </button>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>المشاريع المكتملة</h2>
        <label>
          عنوان القسم
          <input
            type="text"
            value={content.completedProjects.title}
            onChange={(event) =>
              updateContent(["completedProjects", "title"], event.target.value)
            }
          />
        </label>
        <div className="dashboard-list">
          {content.completedProjects.items.map((item, index) => (
            <div key={`completed-project-${index}`} className="dashboard-card">
              <label>
                العنوان
                <input
                  type="text"
                  value={item.title}
                  onChange={(event) =>
                    updateArrayItem(
                      ["completedProjects", "items"],
                      index,
                      "title",
                      event.target.value
                    )
                  }
                />
              </label>
              <label>
                الوصف
                <textarea
                  value={item.description}
                  onChange={(event) =>
                    updateArrayItem(
                      ["completedProjects", "items"],
                      index,
                      "description",
                      event.target.value
                    )
                  }
                />
              </label>
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
              <label>
                نص الزر
                <input
                  type="text"
                  value={item.cta}
                  onChange={(event) =>
                    updateArrayItem(
                      ["completedProjects", "items"],
                      index,
                      "cta",
                      event.target.value
                    )
                  }
                />
              </label>
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
                title: "مشروع جديد",
                description: "وصف مختصر للمشروع",
                link: "https://",
                cta: "زيارة المشروع",
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
          <label>
            عنوان القسم
            <input
              type="text"
              value={content.reviews.title}
              onChange={(event) =>
                updateContent(["reviews", "title"], event.target.value)
              }
            />
          </label>
          <label>
            العنوان الفرعي
            <input
              type="text"
              value={content.reviews.subtitle}
              onChange={(event) =>
                updateContent(["reviews", "subtitle"], event.target.value)
              }
            />
          </label>
        </div>
        <div className="dashboard-list">
          {content.reviews.items.map((item, index) => (
            <div key={`review-${index}`} className="dashboard-card">
              <label>
                الاسم
                <input
                  type="text"
                  value={item.name}
                  onChange={(event) =>
                    updateArrayItem(
                      ["reviews", "items"],
                      index,
                      "name",
                      event.target.value
                    )
                  }
                />
              </label>
              <label>
                الوظيفة
                <input
                  type="text"
                  value={item.role}
                  onChange={(event) =>
                    updateArrayItem(
                      ["reviews", "items"],
                      index,
                      "role",
                      event.target.value
                    )
                  }
                />
              </label>
              <label>
                النص
                <textarea
                  value={item.text}
                  onChange={(event) =>
                    updateArrayItem(
                      ["reviews", "items"],
                      index,
                      "text",
                      event.target.value
                    )
                  }
                />
              </label>
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
                name: "عميل جديد",
                role: "المنصب",
                text: "نص التوصية",
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
                value={link.label}
                onChange={(event) =>
                  updateArrayItem(
                    ["footer", "links"],
                    index,
                    "label",
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
              addArrayItem(["footer", "links"], { label: "رابط جديد", href: "#" })
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
