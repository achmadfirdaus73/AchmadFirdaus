$('#lihatDataBtn').on('click', function(){
      $('#dataModal').modal('show');
    });

    // Chart Skill
    const ctx = document.getElementById('skillChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Komunikasi', 'WebDev', 'Data Entry', 'SqlLite', 'Excel','Wms'],
        datasets: [{
          label: 'Kemampuan',
          data: [90, 83, 80, 75, 70,75],
        }]
      },
      options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 5,
        right: 1,
        bottom: 5,
        left: 1
      }
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10
        }
      }
    }
  }
    });
