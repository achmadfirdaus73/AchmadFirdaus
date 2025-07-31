 // Debugging: Cek apakah objek MaterialUI tersedia
        console.log("Status MaterialUI:", typeof MaterialUI, MaterialUI);

        // Destructuring komponen dari objek global MaterialUI
        const {
            Box, CssBaseline, Typography, createTheme, ThemeProvider,
            Paper, Avatar, Container, Grid, Card, CardContent, Button, IconButton,
            Divider, SvgIcon, SwipeableDrawer, Accordion, AccordionSummary, AccordionDetails,
            Modal, CardActionArea, List, ListItem, ListItemText,
            useMediaQuery 
        } = MaterialUI;

        // --- Ikon Kustom & Standar ---
        // Ikon WhatsApp
        const WhatsAppIcon = (props) => <SvgIcon {...props} viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.61 15.35 3.48 16.84L2 22L7.32 20.59C8.75 21.39 10.36 21.82 12.04 21.82H12.05C17.5 21.82 21.95 17.37 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.3 4.5 17.82 6.02C19.33 7.54 20.18 9.59 20.18 11.79C20.18 16.42 16.57 20.03 11.94 20.03H11.93C10.46 20.03 9.05 19.66 7.81 19L7.42 18.78L4.44 19.56L5.23 16.69L4.97 16.29C4.04 14.93 3.52 13.38 3.52 11.78C3.52 7.15 7.13 3.54 11.76 3.54L12.05 3.67M10.12 6.83L8.31 11.5C8.15 11.92 8.54 12.32 8.96 12.16L10.77 7.5C10.93 7.08 10.54 6.68 10.12 6.83M12.05 8.5L15.78 9.85C16.2 10.01 16.2 10.61 15.78 10.77L12.05 12.12L8.31 10.77C7.89 10.61 7.89 10.01 8.31 9.85L12.05 8.5M13.97 12.16L15.78 7.5C15.94 7.08 15.55 6.68 15.13 6.83L13.32 11.5C13.16 11.92 13.55 12.32 13.97 12.16Z" fill="#25D366" /></SvgIcon>;
        // Ikon Facebook
        const FacebookIcon = (props) => <SvgIcon {...props} viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-1.1 0-1.5.54-1.5 1.45V12H16l-.5 3h-2.5v6.8c4.56-0.93 8-4.96 8-9.8z" fill="#1877F2"/></SvgIcon>;
        // Ikon Instagram
        const InstagramIcon = (props) => <SvgIcon {...props} viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.2,5.2 0,0 1,16.2 22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.2,5.2 0,0 1,7.8 2M7.6,4A3.6,3.6 0,0 0,4 7.6V16.4A3.6,3.6 0,0 0,7.6 20H16.4A3.6,3.6 0,0 0,20 16.4V7.6A3.6,3.6 0,0 0,16.4 4H7.6M17.25,5.5A1.25,1.25 0,1 1,16 6.75,1.25 1.25,0 0,1 17.25,5.5M12,7A5,5 0,1 1,7 12,5 5,0 0,1 12,7M12,9A3,3 0,1 0,15 12,3 3,0 0,0 12,9Z" fill="#E4405F"/></SvgIcon>;
        // Ikon Threads
        const ThreadsIcon = (props) => <SvgIcon {...props} viewBox="0 0 24 24"><path d="M13.55,18.36c-0.34,0.34 -0.8,0.53 -1.28,0.53s-0.94,-0.19 -1.28,-0.53c-0.71,-0.71 -0.71,-1.84 0,-2.55c1.45,-1.45 2.2,-3.36 2.2,-5.34c0,-1.98 -0.75,-3.9 -2.2,-5.34c-0.71,-0.71 -0.71,-1.84 0,-2.55c0.71,-0.71 1.84,-0.71 2.55,0c1.88,1.88 2.93,4.4 2.93,7.07s-1.05,5.19 -2.93,7.07m-4.38,-1.28c-1.45,-1.45 -2.2,-3.36 -2.2,-5.34s0.75,-3.9 2.2,-5.34c0.71,-0.71 0.71,-1.84 0,-2.55c-0.71,-0.71 -1.84,-0.71 -2.55,0c-1.88,1.88 -2.93,4.4 -2.93,7.07s1.05,5.19 2.93,7.07c0.71,0.71 1.84,0.71 2.55,0c0.71,-0.71 0.71,-1.84 0,-2.55Z" fill="#000000"/></SvgIcon>;
        // Ikon standar dari Material Icons
        const ExpandMoreIcon = () => <span className="material-icons">expand_more</span>;
        const CloseIcon = () => <span className="material-icons">close</span>;
        const ArrowBackIcon = () => <span className="material-icons">arrow_back</span>;
        
        // Tema Material-UI
        const theme = createTheme({ 
            palette: { 
                primary: { main: '#1976d2' } 
            },
            typography: {
                fontFamily: 'Inter, sans-serif', 
            }
        });

        // --- Komponen Bagian Profil ---
        const githubProfileImageUrl = "https://raw.githubusercontent.com/achmadfirdaus73/Daus/refs/heads/main/IMG-20250724-WA0003.jpg";
        function ProfileSection({ onOpenDrawer }) {
            const fallbackImageUrl = "https://placehold.co/150x150/7E57C2/FFFFFF?text=Foto+Anda"; 

            return (
                <section id="profile">
                    <Container maxWidth="xl"> 
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
                            <Avatar alt="Foto Profile Anda"
                                src={githubProfileImageUrl}
                                sx={{ width: 150, height: 150, mb: 2, border: '3px solid white', boxShadow: 3 }}
                                onError={(e) => { 
                                    e.target.onerror = null; 
                                    e.target.src = fallbackImageUrl; 
                                    console.error("Gagal memuat gambar dari GitHub, menggunakan fallback.");
                                }}
                            />
                            <Typography variant="h5" component="h1" color="text.primary" sx={{ mb: 1 }}>ACHMAD FIRDAUS</Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>Portofolio</Typography>
                        </Box>
                        <Paper elevation={3} sx={{ p: 4, borderRadius: 2, mb: 4 }}>
                            <Typography variant="h6" gutterBottom>SELAMAT DATANG</Typography> {/* Mengubah h7 ke h6 */}
                            <Typography variant="body1" paragraph color="text.secondary" sx={{fontSize:12,textAlign:'left' }}> Assalamu’alaikum Warahmatullahi Wabarakatuh,Selamat pagi,
Salam sejahtera bagi kita semuanya,Om Swastiastu,Namo Buddhaya,Salam kebajikan<br/>Pertama tama saya ucapkan terimakasih untuk Bapak/Ibu Pimpinan karena telah meluangkan waktunya untuk melihat dan membaca portofolio saya.<br/>Saya membuat portofolio ini dengan menggunakan html react js dan material icon mohon maaf apabila tampilannya kurang rapih atau terlihat berantakan semoga bisa dimaklumi.<br/>Berikut dibawah ini saya sertakan data diri saya dan beberapa ke ahlian,pendidikan,dan pengalaman kerja saya.<br/>Semua saya buat dalam satu file html agar lebih ringkas dan bisa untuk jadi cv saya semoga bisa terbuka di peramban Bapak/Ibu pimpinan.</Typography>
                            <Button variant="contained" onClick={onOpenDrawer} sx={{ mt: 2, borderRadius: 2 }}>
                                Detail Data Saya
                            </Button>
                        </Paper>
                        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                            <Typography variant="h5" gutterBottom>Info Kontak</Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                                Jangan ragu untuk menghubungi saya melalui platform berikut:
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'center' }}>
                                {/* WhatsApp Link */}
                                <IconButton href="https://wa.me/085691009132" target="_blank" aria-label="WhatsApp" sx={{ '&:hover': { transform: 'scale(1.1)' } }}>
                                    <WhatsAppIcon sx={{ fontSize: 40 }} />
                                </IconButton>
                                {/* Facebook Link */}
                                <IconButton href="https://facebook.com/daus.daus.9678067" target="_blank" aria-label="Facebook" sx={{ '&:hover': { transform: 'scale(1.1)' } }}>
                                    <FacebookIcon sx={{ fontSize: 40 }} />
                                </IconButton>
                                {/* Instagram Link */}
                                <IconButton href="https://instagram.com/achmadfirdausssss" target="_blank" aria-label="Instagram" sx={{ '&:hover': { transform: 'scale(1.1)' } }}>
                                    <InstagramIcon sx={{ fontSize: 40 }} />
                                </IconButton>
                                {/* Threads Link */}
                                <IconButton href="https://threads.net/@achmadfirdausssss" target="_blank" aria-label="Threads" sx={{ '&:hover': { transform: 'scale(1.1)' } }}>
                                    <ThreadsIcon sx={{ fontSize: 40 }} />
                                </IconButton>
                            </Box>
                        </Paper>
                    </Container>
                </section>
            );
        }

        // --- Komponen Bagian Keahlian ---
        function SkillsSection() {
            const [expanded, setExpanded] = React.useState(false);
            const handleChange = (panel) => (event, isExpanded) => {
                setExpanded(isExpanded ? panel : false);
            };

            const skillsData = [
                { id: `skill1`, title: `Keahlian Komunikasi`, description: `Mampu menyampaikan ide dan informasi dengan jelas dan efektif, baik secara lisan maupun tulisan, serta mendengarkan dengan aktif.` },
                { id: `skill2`, title: `Pemecahan Masalah`, description: `Terampil dalam mengidentifikasi akar masalah, menganalisis situasi, dan mengembangkan solusi yang inovatif dan praktis.` },
                { id: `skill3`, title: `Kerja Tim`, description: `Mampu berkolaborasi secara efektif dengan anggota tim untuk mencapai tujuan bersama, menghargai perbedaan, dan memberikan kontribusi positif.` },
                { id: `skill4`, title: `Manajemen Waktu`, description: `Efektif dalam mengatur prioritas, merencanakan tugas, dan menyelesaikan pekerjaan sesuai tenggat waktu yang ditetapkan.` },
                { id: `skill5`, title: `Adaptabilitas`, description: `Cepat beradaptasi dengan lingkungan baru, perubahan teknologi, dan tantangan yang tidak terduga.` },
                { id: `skill6`, title: `Kreativitas`, description: `Mampu menghasilkan ide-ide baru dan pendekatan yang orisinal untuk berbagai tugas dan proyek.` },
                { id: `skill7`, title: `Penguasaan Software Office`, description: `Mahir menggunakan Microsoft Office Suite (Word, Excel, PowerPoint) atau setara untuk keperluan dokumentasi dan presentasi.` },
                { id: `skill8`, title: `Dasar Pemrograman Web`, description: `Memiliki pemahaman dasar HTML, CSS, dan JavaScript untuk pengembangan antarmuka web.` },
                { id: `skill9`, title: `Analisis Data Dasar`, description: `Mampu mengumpulkan, mengorganisir, dan menafsirkan data sederhana untuk mendukung pengambilan keputusan.` },
                { id: `skill10`, title: `Pelayanan Pelanggan`, description: `Berpengalaman dalam berinteraksi dengan pelanggan, memahami kebutuhan mereka, dan memberikan solusi yang memuaskan.` },
            ];

            const weaknessesData = [
                { id: `weakness1`, title: `Takut ketinggian`, description: `Dari kecil phobia ketinggian terlalu gemetar pada ketinggian menghitung resiko jatuh sakit dan cidera.` },
                { id: `weakness2`, title: `Sulit Mendelegasikan`, description: `Cenderung ingin melakukan semuanya sendiri untuk memastikan kualitas, yang kadang membebani diri.` },
                { id: `weakness3`, title: `Takut Gagal`, description: `Adakalanya merasa cemas terhadap kegagalan, yang bisa menghambat pengambilan risiko atau mencoba hal baru.` },
                { id: `weakness4`, title: `Kurang Sabar`, description: `Terkadang merasa tidak sabar ketika proses berjalan lebih lambat dari yang diharapkan.` },
                { id: `weakness5`, title: `Overthinking`, description: `Seringkali terlalu banyak memikirkan suatu masalah atau keputusan, yang bisa menyebabkan penundaan.` },
            ];

            return (
                <section id="skills">
                    <Container maxWidth="xl">
                        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>Keahlian & Kelemahan</Typography>
                        
                        <Paper elevation={3} sx={{ p: 4, borderRadius: 2, mb: 4 }}>
                            <Typography variant="h5" gutterBottom>Keahlian / Kelebihan</Typography>
                            {skillsData.map(item => (
                                <Accordion key={item.id} expanded={expanded === item.id} onChange={handleChange(item.id)} sx={{ borderRadius: 2, mb: 1 }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${item.id}-content`} id={`${item.id}-header`}>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography color="text.secondary">{item.description}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Paper>

                        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                            <Typography variant="h5" gutterBottom>Kelemahan / Hal yang Ditakuti</Typography>
                            {weaknessesData.map(item => (
                                <Accordion key={item.id} expanded={expanded === item.id} onChange={handleChange(item.id)} sx={{ borderRadius: 2, mb: 1 }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${item.id}-content`} id={`${item.id}-header`}>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography color="text.secondary">{item.description}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Paper>
                    </Container>
                </section>
            );
        }

        // --- Komponen Bagian Pendidikan ---
        function EducationSection() {
            const [selectedSchool, setSelectedSchool] = React.useState(null);
            const handleOpenModal = (school) => setSelectedSchool(school);
            const handleCloseModal = () => setSelectedSchool(null);

            const educationData = [
                { 
                    id: 'sd', 
                    name: 'SDN JATIRASA 1', 
                    image: 'https://raw.githubusercontent.com/achmadfirdaus73/Daus/refs/heads/main/images%20(2).jpeg', 
                    locationUrl: 'https://maps.app.goo.gl/qfkMFVT2xapwJXM69?g_st=a', // Diisi dengan URL yang Anda berikan
                    description: 'Sekolah Dasar Negeri Jatirasa 1 adalah tempat saya memulai pendidikan formal, membangun dasar-dasar pengetahuan dan keterampilan sosial.'
                }, 
                { 
                    id: 'smp', 
                    name: 'SMPN 30 BEKASI', 
                    image: 'https://raw.githubusercontent.com/achmadfirdaus73/Daus/refs/heads/main/images%20(3).jpeg', 
                    locationUrl: 'https://maps.app.goo.gl/98JJfLM1neZyeFpk9?g_st=a', // Diisi dengan URL yang Anda berikan
                    description: 'Di SMPN 30 Bekasi, saya mengembangkan minat dalam berbagai mata pelajaran dan aktif dalam kegiatan ekstrakurikuler.'
                }, 
                { 
                    id: 'smk', 
                    name: 'SMK TRISAKA BEKASI', 
                    image: 'https://raw.githubusercontent.com/achmadfirdaus73/Daus/refs/heads/main/unnamed.webp', 
                    locationUrl: 'https://maps.app.goo.gl/EpgeJqhWjz6Y7pcW9?g_st=a', // Diisi dengan URL yang Anda berikan
                    description: 'SMK Trisaka Bekasi memberikan saya pendidikan kejuruan yang relevan, mempersiapkan saya untuk dunia kerja dengan keterampilan praktis.'
                }
            ];

            const modalStyle = {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '90%', sm: 400 },
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 3, 
                borderRadius: 2,
                outline: 'none', 
            };

            return (
                <section id="education">
                    <Container maxWidth="xl">
                        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>PENDIDIKAN</Typography>
                        <Grid container spacing={3}>
                            {educationData.map(school => (
                                <Grid item xs={12} sm={6} md={4} key={school.id}>
                                    <Card 
                                        sx={{ height: '100%', borderRadius: 2, boxShadow: 3, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.03)' } }} 
                                        onClick={() => handleOpenModal(school)}
                                    >
                                        <CardActionArea sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
                                            <Typography variant="h6" align="center" sx={{ fontWeight: 'bold', mb: 1 }}>{school.name}</Typography>
                                            <Typography variant="body2" align="center" color="text.secondary">{school.description}</Typography>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        {/* Modal hanya dirender jika selectedSchool memiliki nilai */}
                        {selectedSchool && (
                            <Modal
                                open={Boolean(selectedSchool)} 
                                onClose={handleCloseModal}
                                aria-labelledby="modal-title"
                                aria-describedby="modal-description"
                            >
                                <Box sx={modalStyle}>
                                    <IconButton 
                                        aria-label="close" 
                                        onClick={handleCloseModal} 
                                        sx={{ position: 'absolute', right: 8, top: 8 }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                    <Typography id="modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                                        {selectedSchool.name}
                                    </Typography>
                                    <img 
                                        src={selectedSchool.image} 
                                        alt={`Gambar ${selectedSchool.name}`} 
                                        className="modal-image"
                                        onError={(e) => { 
                                            e.target.onerror = null; 
                                            e.target.src='https://placehold.co/600x400/CCCCCC/FFFFFF?text=Gambar+Tidak+Tersedia'; 
                                        }}
                                    />
                                    <Typography id="modal-description" sx={{ mt: 2, mb: 3 }} color="text.secondary">
                                        {selectedSchool.description}
                                    </Typography>
                                    <Button 
                                        variant="contained" 
                                        href={selectedSchool.locationUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        fullWidth 
                                        sx={{ mt: 2, borderRadius: 2 }}
                                    >
                                        Lihat Lokasi di Peta
                                    </Button>
                                </Box>
                            </Modal>
                        )}
                    </Container>
                </section>
            );
        }

        // --- Komponen Bagian Pengalaman ---
        function ExperienceSection() {
            const [selectedJob, setSelectedJob] = React.useState(null);
            const handleOpenJobModal = (job) => setSelectedJob(job); 
            const handleCloseJobModal = () => setSelectedJob(null); 

            const experienceData = [
                { 
                    id: 'revo', 
                    companyName: 'Foodcourt Revo Bekasi', 
                    description: 'Foodcourt Revo Bekasi adalah pusat kuliner yang ramai, tempat saya mendapatkan pengalaman berharga dalam operasional dan pelayanan pelanggan.', 
                    responsibilities: 'Bertanggung jawab atas kebersihan area, membantu pelanggan menemukan tempat duduk, dan memastikan ketersediaan fasilitas. Melayani pesanan, mengelola transaksi, dan menjaga kebersihan area kerja.', 
                    position: 'Staf Operasional', 
                    achievements: 'Meningkatkan kepuasan pelanggan melalui pelayanan yang cepat dan ramah. Berkontribusi pada efisiensi operasional harian.' 
                }, 
                { 
                    id: 'topro', 
                    companyName: 'PT Topro Indonesia periode kerja 2016-2020', 
                    description: 'PT Topro Indonesia adalah perusahaan manufaktur yang berfokus pada produksi komponen Outsole Sepatu.', 
                    responsibilities: 'Melakukan produksi OutSole Sepatu sesuai standar kualitas. Mengoperasikan mesin produksi dan melakukan kontrol kualitas produk. Melakukan perawatan dasar mesin dan melaporkan masalah teknis.', 
                    position: 'Operator Produksi', 
                    achievements: 'Berhasil mencapai target produksi harian dengan tingkat cacat minimal. Berkontribusi pada peningkatan efisiensi lini produksi.' 
                }, 
                { 
                    id: 'gemilang', 
                    companyName: 'PT Gemilang Jaya Elektronik Periode Kerja 2021-2025', 
                    description: 'PT Gemilang Jaya Elektronik bergerak di bidang distribusi perangkat elektronik dan layanan purna jual.', 
                    responsibilities: 'Memberikan dukungan teknis kepada pelanggan terkait produk elektronik. Melakukan penagihan kepada pelanggan sesuai jumlah harian barang kreditnya.', 
                    position: 'Kolektor Penagihan', 
                    achievements: 'BEKERJA SELAMA 4 TAHUN TANPA LIBUR.' 
                }
            ];

            // Tampilan detail pekerjaan saat dipilih
            if (selectedJob) {
                return (
                    <section id="experience-detail">
                        <Container maxWidth="xl">
                            <Button 
                                startIcon={<ArrowBackIcon />} 
                                onClick={handleCloseJobModal} 
                                sx={{ mb: 3, borderRadius: 2 }}
                            >
                                Kembali ke Daftar Pengalaman
                            </Button>
                            <Typography variant="h4" component="h2" gutterBottom>{selectedJob.companyName}</Typography>
                            
                            <Paper elevation={3} sx={{ mb: 3, p: 3, borderRadius: 2 }}>
                                <Typography variant="h6" gutterBottom>Deskripsi Perusahaan</Typography>
                                <Typography color="text.secondary">{selectedJob.description}</Typography>
                            </Paper>
                            
                            <Paper elevation={3} sx={{ mb: 3, p: 3, borderRadius: 2 }}>
                                <Typography variant="h6" gutterBottom>Jabatan</Typography>
                                <Typography color="text.secondary">{selectedJob.position}</Typography>
                            </Paper>
                            
                            <Paper elevation={3} sx={{ mb: 3, p: 3, borderRadius: 2 }}>
                                <Typography variant="h6" gutterBottom>Tanggung Jawab Pekerjaan</Typography>
                                <Typography color="text.secondary">{selectedJob.responsibilities}</Typography>
                            </Paper>
                            
                            <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                                <Typography variant="h6" gutterBottom>Prestasi dalam Pekerjaan</Typography>
                                <Typography color="text.secondary">{selectedJob.achievements}</Typography>
                            </Paper>
                        </Container>
                    </section>
                );
            }

            // Tampilan daftar pengalaman
            return (
                <section id="experience">
                    <Container maxWidth="xl">
                        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>PENGALAMAN KERJA</Typography>
                        <Grid container spacing={3}>
                            {experienceData.map(job => (
                                <Grid item xs={12} sm={6} md={4} key={job.id}>
                                    <Card 
                                        sx={{ height: '100%', borderRadius: 2, boxShadow: 3, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.03)' } }}
                                        onClick={() => setSelectedJob(job)}
                                    >
                                        <CardActionArea sx={{ height: '100%', p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>{job.companyName}</Typography>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </section>
            );
        }

        // --- Komponen Drawer Data Pribadi ---
        function PersonalDataDrawer({ open, onOpen, onClose }) {
            const data = [
                { label: 'Nama Lengkap', value: 'ACHMAD FIRDAUS' },
                { label: 'Jenis Kelamin', value: 'Laki-laki' },
                { label: 'Tempat, Tanggal Lahir', value: 'Bekasi,10 SEPTEMBER 1996' },
                { label: 'Agama', value: 'ISLAM' },
                { label: 'Kewarganegaraan', value: 'Indonesia' },
                { label: 'Umur', value: ' 28 Tahun' },
                { label: 'Status', value: 'Belum Menikah' },
                { label: 'Pendidikan Terakhir', value: 'SMK Teknik Kendaraan Ringan' },
                { label: 'Alamat', value: 'Kp pondok benda rt 05/02 no.48 kelurahan-Jatirasa kec-Jatiasih Kota Bekasi 17424' },
                { label: 'No. Handphone', value: '0856-9100-9132' },
                { label: 'Email', value: 'achmadfirdaus0910@gmail.com' },
            ];
            const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent); 

            return (
                <SwipeableDrawer 
                    anchor="bottom" 
                    open={open} 
                    onClose={onClose} 
                    onOpen={onOpen} 
                    disableBackdropTransition={!iOS} 
                    disableDiscovery={iOS} 
                    sx={{ '& .MuiDrawer-paper': { borderTopLeftRadius: 16, borderTopRightRadius: 16 } }}
                >
                    <Box sx={{ p: 2, pb: 4, width: 'auto' }} role="presentation">
                        <div className="puller"></div>
                        <Typography variant="h6" sx={{ textAlign: 'center', my: 2 }}>DATA SAYA</Typography>
                        <List>
                            {data.map(item => (
                                <React.Fragment key={item.label}>
                                    <ListItem>
                                        <ListItemText primary={item.label} secondary={item.value} />
                                    </ListItem>
                                    <Divider component="li" />
                                </React.Fragment>
                            ))}
                        </List>
                        <Button 
                            onClick={onClose} 
                            sx={{ mt: 2, borderRadius: 2 }} 
                            fullWidth 
                            variant="outlined" 
                        >
                            Tutup
                        </Button>
                    </Box>
                </SwipeableDrawer>
            );
        }

        // --- Komponen Utama Aplikasi ---
        function App() {
            const [isDrawerOpen, setDrawerOpen] = React.useState(false);

            return (
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, sm: 3, md: 4 } }}> 
                        <ProfileSection onOpenDrawer={() => setDrawerOpen(true)} />
                        <Divider sx={{ my: 8 }} /> 
                        <SkillsSection />
                        <Divider sx={{ my: 8 }} />
                        <EducationSection />
                        <Divider sx={{ my: 8 }} />
                        <ExperienceSection />
                    </Box>
                    <PersonalDataDrawer 
                        open={isDrawerOpen} 
                        onClose={() => setDrawerOpen(false)} 
                        onOpen={() => setDrawerOpen(true)} 
                    />
                </ThemeProvider>
            );
        }

        // Render aplikasi React ke DOM
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);