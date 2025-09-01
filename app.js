// Popup Modal
$('#lihatDataBtn').on('click',function(){
 $('#dataModal').modal('show');
  });

// Chart Skill
var chart = echarts.init(document.getElementById('chart'));

var skills = ['EXCEL', 'ERP', 'SQL', 'WEB', 'KOMUNIKASI'];
var values = [70, 70, 80, 85, 100];

var data = [];
for (var i = 0; i < skills.length; i++) {
  data.push([i, 0, values[i]]);
}

var option = {
  tooltip: {},
  visualMap: {
    max: 100,
    inRange: {
      color: ['#ffffff', '#ffd633', '#28a745', '#6f42c1', '#ff0000']
    }
  },
  xAxis3D: {
    type: 'category',
    data: skills,
    axisLabel: {
    color: '#00ffcc', // warna teks
    fontSize: 14,     // ukuran font
    fontWeight: 'bold'
  }
  },
  yAxis3D: { type: 'category', data: [''] },
  zAxis3D: { type: 'value', max: 100 ,axisLabel: {
  color: '#ffff', // warna teks
  fontSize: 10, // ukuran font
  fontWeight: 'bold'
}
    
  },
  grid3D: {
    boxWidth: 200,
    boxDepth: 20,
    light: { main: { intensity: 1.2 } }
  },
  series: [{
    type: 'bar3D',
    data: data,
    shading: 'lambert',
    label: { show: true, formatter: d => d.value[2] + '%' }
  }]
};

chart.setOption(option);
