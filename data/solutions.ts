import { MessageCircle, Hammer, HeartHandshake, FileCheck, LucideIcon } from "lucide-react";

export interface Solution {
    slug: string;
    title: string;
    shortDescription: string;
    icon: LucideIcon;
    gradient: string;
    border: string;
    iconColor: string;
    content: {
        intro: string;
        points: string[];
        conclusion: string;
    };
}

export const SOLUTIONS: Solution[] = [
    {
        slug: "dialog-rekonsiliasi",
        title: "Dialog & Rekonsiliasi Berkelanjutan",
        shortDescription: "Membangun ruang dialog yang jujur antara pemerintah, tokoh adat, gereja, perempuan Papua, dan generasi muda untuk memulihkan kepercayaan dan menyelesaikan konflik secara damai.",
        icon: MessageCircle,
        gradient: "from-blue-500/10 to-blue-500/5",
        border: "border-blue-200",
        iconColor: "text-blue-600",
        content: {
            intro: "Upaya penguatan integrasi nasional harus dimulai dari pemulihan kepercayaan antara pemerintah dan masyarakat Papua. Ini penting karena konflik berkepanjangan berakar pada luka sejarah—mulai dari ketidakpercayaan terhadap proses Pepera 1969 hingga pengalaman diskriminasi dan pendekatan represif keamanan di masa lalu.",
            points: [
                "Membangun ruang dialog yang jujur dan setara antara pemerintah pusat, pemerintah daerah, tokoh adat, gereja, pemuda, perempuan Papua, dan masyarakat sipil.",
                "Membahas akar persoalan, bukan hanya gejala konflik—termasuk isu sejarah, diskriminasi, stigmatisasi, hingga rasa keterpinggiran budaya dan politik.",
                "Menghidupkan mekanisme rekonsiliasi yang fokus pada pemulihan trauma, pemaafan, dan penyembuhan sosial.",
                "Mengakui identitas dan budaya Papua sebagai bagian penting dari ke-Indonesia-an."
            ],
            conclusion: "Dialog damai yang konsisten dapat mengurangi prasangka, memperkuat integrasi sosial-budaya, serta membuka jalan menuju keadilan jangka panjang."
        }
    },
    {
        slug: "pembangunan-inklusif",
        title: "Pembangunan Inklusif & Berkeadilan",
        shortDescription: "Pemerataan akses pendidikan, kesehatan, infrastruktur, dan pemberdayaan ekonomi agar masyarakat Papua memperoleh manfaat langsung dari kekayaan alamnya sendiri.",
        icon: Hammer,
        gradient: "from-amber-500/10 to-amber-500/5",
        border: "border-amber-200",
        iconColor: "text-amber-600",
        content: {
            intro: "Konflik Papua tidak bisa dilepaskan dari ketimpangan ekonomi yang tajam. Papua kaya sumber daya alam, tetapi masyarakat lokal sering tidak merasakan manfaatnya. Ketimpangan inilah yang menimbulkan rasa ketidakadilan dan melemahkan integrasi nasional.",
            points: [
                "Pemerataan akses pendidikan dan kesehatan, terutama di wilayah pedalaman.",
                "Pembangunan infrastruktur dasar—jalan, jembatan, telekomunikasi, dan fasilitas publik—untuk membuka isolasi wilayah.",
                "Transparansi pengelolaan sumber daya alam, serta memastikan masyarakat Papua menjadi penerima manfaat utama.",
                "Pemberdayaan ekonomi lokal, memberi prioritas pekerjaan kepada masyarakat asli Papua.",
                "Mendorong partisipasi masyarakat dalam perencanaan pembangunan."
            ],
            conclusion: "Pembangunan yang merata akan mengurangi “paradoks Papua”: tanah kaya, rakyat miskin."
        }
    },
    {
        slug: "pendekatan-keamanan-humanis",
        title: "Pendekatan Keamanan Humanis",
        shortDescription: "Mengutamakan perlindungan warga sipil dan mengurangi pendekatan militeristik. Mengedepankan keamanan berbasis kesejahteraan dan penghormatan hak asasi manusia.",
        icon: HeartHandshake,
        gradient: "from-emerald-500/10 to-emerald-500/5",
        border: "border-emerald-200",
        iconColor: "text-emerald-600",
        content: {
            intro: "PPT menjelaskan bahwa pendekatan keamanan yang terlalu militeristik pada masa lalu menyebabkan trauma kolektif, rasa takut, dan ketidakpercayaan terhadap negara. Hal ini memperparah konflik dan memicu tuntutan pemisahan diri.",
            points: [
                "Mengurangi tindakan represif, menggantinya dengan pendekatan persuasif dan dialogis.",
                "Melindungi warga sipil sebagai prioritas utama, bukan menempatkan mereka sebagai pihak yang dicurigai.",
                "Menghindari kriminalisasi yang tidak berdasar, terutama terhadap masyarakat adat dan aktivis sipil.",
                "Mengutamakan kesejahteraan sebagai pendekatan keamanan, tidak hanya kekuatan bersenjata.",
                "Memastikan aparat memahami konteks budaya & sosial Papua, sehingga tidak terjadi kesalahpahaman."
            ],
            conclusion: "Keamanan yang humanis akan membangun kembali kepercayaan masyarakat Papua kepada institusi negara."
        }
    },
    {
        slug: "otonomi-khusus-transparan",
        title: "Penguatan Otonomi Khusus yang Transparan",
        shortDescription: "Optimalisasi dana Otsus secara akuntabel dan memperkuat peran pemimpin lokal dalam pengambilan keputusan untuk memastikan pembangunan sesuai kebutuhan masyarakat Papua.",
        icon: FileCheck,
        gradient: "from-purple-500/10 to-purple-500/5",
        border: "border-purple-200",
        iconColor: "text-purple-600",
        content: {
            intro: "Otonomi Khusus (Otsus) Papua pada dasarnya dirancang sebagai jalan tengah antara kebutuhan Papua untuk mengatur dirinya dan integrasi Indonesia secara nasional. Namun, tantangan terbesar adalah rendahnya transparansi dan kurangnya keterlibatan masyarakat lokal dalam prosesnya.",
            points: [
                "Transparansi dan akuntabilitas dana Otsus, agar masyarakat tahu ke mana anggaran digunakan.",
                "Melibatkan pemimpin lokal—adat, gereja, pemuda—dalam penyusunan kebijakan dan distribusi dana.",
                "Penguatan lembaga pengawas independen untuk mencegah penyalahgunaan dana Otsus.",
                "Memastikan Otsus benarbenar menjawab kebutuhan masyarakat, bukan hanya proyek pembangunan semata.",
                "Peningkatan representasi masyarakat Papua dalam jabatan strategis pemerintah daerah maupun pusat."
            ],
            conclusion: "Dengan Otsus yang efektif dan transparan, masyarakat Papua dapat merasakan kehadiran negara secara nyata dalam bentuk keadilan dan kesejahteraan."
        }
    }
];
