const { Card, CardContent, Typography, Grid, Modal, Box } = MaterialUI;

function App() {
  const [open,setOpen] = React.useState(false);
  const [modalContent,setModalContent] = React.useState("");

  const handleOpen = (content)=>{ setModalContent(content); setOpen(true); };
  const handleClose = ()=>setOpen(false);

  React.useEffect(()=>{
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const data = [100,50,60,75,50];
    const tempData = [0,0,0,0,0];
    const chart = new Chart(ctx,{
      type:'bar',
      data:{
        labels:['Komunikasi','SQL','Excel','Web','ERP'],
        datasets:[{
          label:'Keahlian (%)',
          data:tempData,
          backgroundColor:['#1976d2','#ff5722','#4caf50','#fbc02d','#9c27b0'],
          borderRadius:10,
          borderSkipped:false
        }]
      },
      options:{
        plugins:{
          legend:{display:false},
          datalabels:{
            color:'white',
            anchor:'end',
            align:'top',
            formatter:(value)=>value+'%'
          }
        },
        scales:{y:{beginAtZero:true,max:100,ticks:{stepSize:20}}}
      },
      plugins:[ChartDataLabels]
    });

    let step=0;
    const interval = setInterval(()=>{
      step+=2;
      chart.data.datasets[0].data = data.map(v=>Math.min(v, Math.round(v*step/100)));
      chart.update();
      if(step>=100) clearInterval(interval);
    },20);
  },[]);

  return (
    <div className="container">
      <header className="profile-section">
        <Card className="profile-card card-hover">
          <CardContent>
            <Typography variant="h5">ACHMAD FIRDAUS</Typography>
            <Typography variant="body1">Jobseeker</Typography>
             <Typography variant="body2">📝</Typography>
          </CardContent>
        </Card>

        <img src="https://raw.githubusercontent.com/achmadfirdaus73/Daus/refs/heads/main/IMG-20250805-WA0063.jpg" alt="Foto Achmad Firdaus - Web Developer" className="profile-pic"/>

        <Card className="profile-card card-hover">
          <CardContent>
            <Typography variant="h6">🖥️ </Typography>
            <Typography variant="body2">AdminStaff | Waiters | Operator Produksi | Profesional Collection</Typography>
          </CardContent>
        </Card>
      </header>

      <Typography align="center" variant="body1" gutterBottom>
        Welcome to my portfolio, with this portfolio I hope you can get to know me better with some of my personal data and some of the projects I have made, so I would like to thank you for taking the time to look at my portfolio.
      </Typography>

      <hr style={{border:"1px solid #fff", margin:"20px 0"}}/>

      {/* Icon Row */}
      <div className="icon-row">
        <div className="icon-button" onClick={()=>handleOpen(
          <div>
            <Typography variant="h6">🎓 Pendidikan</Typography>
            <ul>
              <li>SDN JATIRASA 1</li>
              <li>SMPN 30 BEKASI</li>
              <li>SMK TRISAKA</li>
            </ul>
          </div>
        )}>
          <span className="material-icons">school</span>
          <span>Pendidikan</span>
        </div>

        <div className="icon-button" onClick={()=>handleOpen(
          <div>
            <Typography variant="h6">📜 Riwayat Hidup</Typography>
            <ul>
              <li>Nama: Achmad Firdaus</li>
              <li>Jenis Kelamin: Laki-laki</li>
              <li>Pendidikan: SMK TRISAKA BEKASI</li>
              <li>Tempat Tanggal Lahir: Bekasi, 10/09/1996</li>
              <li>Agama: Islam</li>
              <li>Kewarganegaraan: Indonesia</li>
              <li>Hobi: Coding, Gaming, Musik</li>
              <li>Status: Lajang</li>
              <li>Golongan Darah: O</li>
              <li>No Handphone: 0856-9100-9132</li>
              <li>Email: achmadfirdaus0910@gmail.com</li>
              <li>Alamat: Bekasi, Jawa Barat</li>
              <li>Pengalaman Kerja:
                <ul>
                  <li>CV FARADINA ABADI MULIA (MAGANG PKL) - STAFF ADMIN</li>
                  <li>FOOD COURT REVO TOWN - WAITERS</li>
                  <li>PT TOPRO INDONESIA - OPERATOR PRODUKSI INJECTION MOLDING</li>
                  <li>PT GEMILANG JAYA BEKASI - COLLECTION</li>
                </ul>
              </li>
            </ul>
          </div>
        )}>
          <span className="material-icons">history</span>
          <span>Riwayat</span>
        </div>

        <div className="icon-button" onClick={()=>handleOpen(
          <div>
            <Typography>📄 CV: Silakan download CV saya dibawah</Typography>
            <a href="Dokumen.pdf" download>
              <button style={{marginTop:"10px",padding:"8px 16px",background:"#1976d2",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"}}>Download CV</button>
            </a>
          </div>
        )}>
          <span className="material-icons">description</span>
          <span>CV</span>
        </div>
      </div>

      <hr style={{border:"1px solid #fff", margin:"20px 0"}}/>

      {/* Keahlian */}
      <Card className="card-hover" style={{marginTop:"40px"}}>
        <CardContent>
          <Typography variant="h6" gutterBottom>💡 Keahlian</Typography>
          <canvas id="skillsChart"></canvas>
        </CardContent>
      </Card>

      {/* Dots decoration */}
      <div className="dot-line">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      {/* My Projects */}
      <Typography variant="h5" gutterBottom align="left">🚀 My Projects</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className="card-hover">
            <iframe src="https://achmadfirdaus73.github.io/Sistemecomerce/"></iframe>
            <CardContent>
              <Typography variant="h6">Sistem E-Commerce</Typography>
              <Typography variant="body2">Simulasi e-commerce dengan produk, order, dan pembayaran login cek username : admin@example.com pw:123456.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="card-hover">
            <iframe src="https://achmadfirdaus73.github.io/InvenstorySistem/"></iframe>
            <CardContent>
              <Typography variant="h6">Inventory System</Typography>
              <Typography variant="body2">Manajemen stok gudang dan inventaris berbasis web login cek username : admin@gudang.com pw : 123456.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="card-hover">
            <iframe src="https://achmadfirdaus73.github.io/AplikasiKasir/"></iframe>
            <CardContent>
              <Typography variant="h6">Aplikasi Kasir</Typography>
              <Typography variant="body2">POS system sederhana untuk mencatat transaksi penjualan login cek username : admin@toko.com pw : 123456.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className="card-hover">
            <iframe src="https://eletronicproduct.github.io/GudangSpreedSheetGoogle/"></iframe>
            <CardContent>
              <Typography variant="h6">Gudang Spreadsheet</Typography>
              <Typography variant="body2">Integrasi gudang dengan Google Spreadsheet untuk data realtime.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Pesan / Text bebas */}
      <div className="message-section">
        <p>That's all my introduction, I hope this portfolio can be a consideration for you to give me an opportunity in your company, don't forget I include my social media link so we can connect more closely regarding a job.</p>
      </div>

      {/* Social Media Glass Card */}
      <div className="social-card">
        <a href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav" target="_blank" className="social-link-linkedin">LinkedIn</a>
        <a href="https://instagram.com/AchmadFirdausssss" target="_blank" className="social-link-instagram">Instagram</a>
        <a href="https://wa.me/085691009132" target="_blank" className="social-link-wa">WhatsApp</a>
        <a href="mailto:achmadfirdaus0910@gmail.com" className="social-link-email">Email</a>
        <a href="https://github.com/achmadfirdaus73" target="_blank" className="social-link-github">GitHub</a>
      </div>

      {/* Footer */}
      <footer>
        <Typography variant="body2">© 2025 Achmad Firdaus. All rights reserved.</Typography>
      </footer>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{
          position:'absolute', top:'50%', left:'50%',
          transform:'translate(-50%, -50%)',
          bgcolor:'background.paper', color:'black',
          p:4, borderRadius:2, boxShadow:24, maxWidth:400
        }}>
          {typeof modalContent==='string'?<Typography>{modalContent}</Typography>:modalContent}
        </Box>
      </Modal>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
