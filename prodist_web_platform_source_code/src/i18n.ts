export type Lang = "en" | "vi";

export const translations = {
  en: {
    // Navbar
    nav_home: "Home",
    nav_demo: "Demo",
    nav_about: "About",
    nav_tagline: "Profile-Guided Distillation",

    // Hero
    hero_badge: "AI-Powered Cultural Heritage Recognition",
    hero_subtitle: "Profile-Guided Semantic Distillation",
    hero_subtitle2: "for Compact Cultural Heritage Recognition",
    hero_desc:
      "An AI system for recognizing Vietnamese traditional instruments, embedding expert knowledge into a compact model via profile-guided semantic distillation.",
    hero_cta_demo: "🎵 Try Demo",
    hero_cta_learn: "Learn More →",
    hero_scroll: "Scroll down",

    // Stats
    stat_f1_label: "F1 Score",
    stat_f1_desc: "Best configuration",
    stat_size_label: "Model Size",
    stat_size_desc: "47.86% smaller",
    stat_confusion_label: "Confusion Reduced",
    stat_confusion_desc: "vs. visual-only baseline",
    stat_f1imp_label: "F1 Improvement",
    stat_f1imp_desc: "Profile vs. label-only",

    // Features section
    features_tag: "Key Features",
    features_title: "Why ProDist?",
    feat1_title: "High-Accuracy Recognition",
    feat1_desc:
      "98.44% F1 Score on the Vietnamese traditional instrument dataset, outperforming visual-only baselines by 4.05 percentage points.",
    feat2_title: "Expert Knowledge",
    feat2_desc:
      "Integrates expert-reviewed class profiles into training via prototype supervision, enabling the model to understand cultural context.",
    feat3_title: "Compact Model",
    feat3_desc:
      "Only 52.73 MB — 47.86% smaller than the best visual-only checkpoint, ready for real-world deployment.",

    // Dataset section
    dataset_tag: "Dataset",
    dataset_title: "Recognized Instruments",
    dataset_desc:
      "A curated Vietnamese traditional instrument dataset reviewed and validated by domain experts.",
    dataset_cta: "Try Demo Now →",

    // Demo page
    demo_title: "AI-Powered Vietnamese Traditional Instrument Preservation System",
    demo_subtitle:
      "Upload an instrument image to identify and retrieve detailed cultural information.",
    demo_upload_label: "Upload an image here to identify the instrument:",
    demo_choose_file: "Choose File",
    demo_no_file: "No file chosen",
    demo_upload_btn: "Upload",
    demo_analyzing: "Analyzing...",
    demo_ai_analyzing: "ProDist is analyzing your image…",
    demo_ai_method: "Using Profile-Guided Semantic Distillation",
    demo_confidence: "Confidence: 98.44%",
    demo_info_title: "Instrument Information:",
    demo_videos_title: "Related Art Forms",
    demo_list_title: "Instruments in the System",
    demo_view_detail: "View details →",
    demo_back: "← Back to list",
    demo_identified_by: "Identified by ProDist AI",
    demo_success: "Recognized Successfully",
    demo_f1: "ProDist F1: 98.44%",

    // Video card
    video_performer: "Performed by",
    video_composer: "Composer",
    video_title: "Title",

    // About page
    about_title: "About ProDist",
    about_tagline: "Profile-Guided Semantic Distillation",
    about_desc:
      "ProDist is a profile-guided semantic distillation framework for compact expert recognition. During training, expert-reviewed class profiles are encoded as fixed semantic prototypes. Multi-teacher distillation transfers visual inter-class relations, while prototype supervision guides projected student representations toward their target profiles.",
    about_results_title: "Research Results",
    about_abstract_title: "Abstract",
    about_abstract_p1:
      "Cultural heritage expert systems require recognition models that go beyond visual labeling to support classification, retrieval, and cultural interpretation. The challenge is acute when visually similar artifacts differ in function, performance practice, use, and cultural context. Existing visual recognition and distillation methods learn mainly from labels, visual features, or teacher outputs. Although these appearance-derived signals improve accuracy and compactness, they do not encode class-level expert knowledge into deployed models.",
    about_abstract_p2:
      "We propose ProDist, a profile-guided semantic distillation framework for compact expert recognition. During training, expert-reviewed class profiles are encoded as fixed semantic prototypes. Multi-teacher distillation transfers visual inter-class relations, while prototype supervision guides projected student representations toward their target profiles and away from competing profiles.",
    about_contact_title: "Contact",
    about_contact_desc:
      "For more information about ProDist and the Vietnamese traditional instrument dataset, please reach out to the research team.",
    about_read_paper: "📄 Read Paper",

    // Footer
    footer_copy:
      "© 2025 ProDist Research · Vietnamese Traditional Instrument Recognition · Cultural Heritage AI",

    // Instrument info keys
    info_ethnic: "Used widely by ethnic group",
    info_structure: "Structure consists of",
    info_strings: "Number of strings",
    info_origin: "Origin",
    info_playing: "Playing technique",
    info_appeared: "Appeared in Vietnam",
    info_used_in: "Used in",
  },

  vi: {
    // Navbar
    nav_home: "Trang chủ",
    nav_demo: "Demo",
    nav_about: "Liên hệ",
    nav_tagline: "Chắt lọc tri thức có hướng dẫn",

    // Hero
    hero_badge: "Nhận diện Di sản Văn hoá bằng AI",
    hero_subtitle: "Chắt lọc Ngữ nghĩa Có hướng dẫn Hồ sơ",
    hero_subtitle2: "cho Nhận diện Di sản Văn hoá Nhỏ gọn",
    hero_desc:
      "Hệ thống nhận diện nhạc cụ truyền thống Việt Nam sử dụng AI, tích hợp tri thức chuyên gia vào mô hình nhỏ gọn thông qua kỹ thuật chắt lọc tri thức có hướng dẫn hồ sơ.",
    hero_cta_demo: "🎵 Nhận diện ngay",
    hero_cta_learn: "Tìm hiểu thêm →",
    hero_scroll: "Cuộn xuống",

    // Stats
    stat_f1_label: "Điểm F1",
    stat_f1_desc: "Cấu hình tốt nhất",
    stat_size_label: "Kích thước mô hình",
    stat_size_desc: "Nhỏ hơn 47.86%",
    stat_confusion_label: "Giảm nhầm lẫn",
    stat_confusion_desc: "so với baseline chỉ thị giác",
    stat_f1imp_label: "Cải thiện F1",
    stat_f1imp_desc: "Hồ sơ so với chỉ nhãn",

    // Features section
    features_tag: "Tính năng nổi bật",
    features_title: "Tại sao chọn ProDist?",
    feat1_title: "Nhận diện chính xác cao",
    feat1_desc:
      "F1 Score 98.44% trên bộ dữ liệu nhạc cụ truyền thống Việt Nam, vượt trội so với các baseline chỉ dùng thị giác đến 4.05 điểm phần trăm.",
    feat2_title: "Tri thức chuyên gia",
    feat2_desc:
      "Tích hợp hồ sơ lớp được chuyên gia xem xét vào quá trình huấn luyện qua prototype supervision, giúp mô hình hiểu ngữ cảnh văn hoá.",
    feat3_title: "Mô hình nhỏ gọn",
    feat3_desc:
      "Chỉ 52.73 MB – nhỏ hơn 47.86% so với checkpoint visual-only tốt nhất, phù hợp triển khai thực tế.",

    // Dataset section
    dataset_tag: "Bộ dữ liệu",
    dataset_title: "Nhạc cụ được nhận diện",
    dataset_desc:
      "Bộ dữ liệu nhạc cụ truyền thống Việt Nam được tuyển chọn và đánh giá bởi chuyên gia.",
    dataset_cta: "Thử Demo ngay →",

    // Demo page
    demo_title: "Hệ thống Bảo tồn Nhạc cụ Truyền thống Việt Nam bằng AI",
    demo_subtitle:
      "Tải lên hình ảnh nhạc cụ để nhận diện và tra cứu thông tin văn hoá chi tiết.",
    demo_upload_label: "Tải lên hình ảnh để nhận diện nhạc cụ:",
    demo_choose_file: "Chọn File",
    demo_no_file: "Chưa chọn file",
    demo_upload_btn: "Tải lên",
    demo_analyzing: "Đang phân tích...",
    demo_ai_analyzing: "ProDist đang phân tích hình ảnh…",
    demo_ai_method: "Sử dụng Chắt lọc Ngữ nghĩa Có hướng dẫn Hồ sơ",
    demo_confidence: "Độ tin cậy: 98.44%",
    demo_info_title: "Thông tin đàn:",
    demo_videos_title: "Các loại hình nghệ thuật",
    demo_list_title: "Danh sách nhạc cụ trong hệ thống",
    demo_view_detail: "Xem chi tiết →",
    demo_back: "← Quay lại danh sách",
    demo_identified_by: "Được nhận diện bởi ProDist AI",
    demo_success: "Nhận diện thành công",
    demo_f1: "ProDist F1: 98.44%",

    // Video card
    video_performer: "Được biểu diễn bởi",
    video_composer: "Có tác giả là",
    video_title: "Có tên là",

    // About page
    about_title: "Về ProDist",
    about_tagline: "Chắt lọc Ngữ nghĩa Có hướng dẫn Hồ sơ",
    about_desc:
      "ProDist là framework chắt lọc tri thức có hướng dẫn hồ sơ dành cho nhận diện chuyên gia nhỏ gọn. Trong quá trình huấn luyện, các hồ sơ lớp được chuyên gia xem xét được mã hóa thành các nguyên mẫu ngữ nghĩa cố định. Chắt lọc đa giáo viên truyền tải các quan hệ liên lớp trực quan, trong khi giám sát nguyên mẫu hướng dẫn biểu diễn học sinh được chiếu hướng tới hồ sơ mục tiêu của chúng.",
    about_results_title: "Kết quả nghiên cứu",
    about_abstract_title: "Tóm tắt (Abstract)",
    about_abstract_p1:
      "Các hệ thống chuyên gia di sản văn hoá yêu cầu mô hình nhận diện vượt ra ngoài việc gán nhãn trực quan để hỗ trợ phân loại, truy xuất và diễn giải văn hoá. Thách thức trở nên gay gắt khi các hiện vật nhìn tương tự nhau nhưng lại khác nhau về chức năng, thực hành biểu diễn, cách dùng và bối cảnh văn hoá.",
    about_abstract_p2:
      "Chúng tôi đề xuất ProDist, một framework chắt lọc ngữ nghĩa có hướng dẫn hồ sơ cho nhận diện chuyên gia nhỏ gọn. Trong quá trình huấn luyện, các hồ sơ lớp được chuyên gia xem xét được mã hoá thành các nguyên mẫu ngữ nghĩa cố định. Chắt lọc đa giáo viên truyền tải các quan hệ liên lớp trực quan, trong khi giám sát nguyên mẫu hướng dẫn biểu diễn được chiếu của học sinh hướng tới hồ sơ mục tiêu của chúng và tránh xa các hồ sơ cạnh tranh.",
    about_contact_title: "Liên hệ",
    about_contact_desc:
      "Để biết thêm thông tin về ProDist và bộ dữ liệu nhạc cụ truyền thống Việt Nam, vui lòng liên hệ nhóm nghiên cứu.",
    about_read_paper: "📄 Đọc Paper",

    // Footer
    footer_copy:
      "© 2025 Nghiên cứu ProDist · Nhận diện Nhạc cụ Truyền thống Việt Nam · AI Di sản Văn hoá",

    // Instrument info keys
    info_ethnic: "Được sử dụng rộng rãi trong dân tộc",
    info_structure: "Cấu tạo gồm",
    info_strings: "Số dây",
    info_origin: "Nguồn gốc",
    info_playing: "Cách chơi",
    info_appeared: "Xuất hiện ở Việt Nam vào",
    info_used_in: "Được sử dụng trong",
  },
};

export type TranslationKey = keyof typeof translations.en;
