// ========== Chart.js Configuration ==========
Chart.defaults.color = '#9BA3B4';
Chart.defaults.font.family = '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
Chart.defaults.font.size = 13;

// ========== Chart 1: Model Comparison (Horizontal Bar) ==========
function createModelComparisonChart() {
  const ctx = document.getElementById('modelComparisonChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Claude Opus 5 + Claude Code', 'GPT-5.6 + Codex', 'Grok 4.5 + Codex'],
      datasets: [{
        label: '触发率 (%)',
        data: [79.2, 75.0, 33.3],
        backgroundColor: [
          'rgba(167, 139, 250, 0.8)',
          'rgba(56, 189, 248, 0.8)',
          'rgba(251, 113, 133, 0.8)'
        ],
        borderColor: [
          'rgba(167, 139, 250, 1)',
          'rgba(56, 189, 248, 1)',
          'rgba(251, 113, 133, 1)'
        ],
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(10, 13, 18, 0.95)',
          titleColor: '#E4E9F2',
          bodyColor: '#9BA3B4',
          borderColor: 'rgba(56, 189, 248, 0.3)',
          borderWidth: 1,
          padding: 12,
          displayColors: false,
          callbacks: {
            label: function(context) {
              return '触发率: ' + context.parsed.x + '%';
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 100,
          grid: {
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          },
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        },
        y: {
          grid: {
            display: false,
            drawBorder: false
          }
        }
      }
    }
  });
}

// ========== Chart 2: Category Sensitivity (Vertical Bar) ==========
function createCategorySensitivityChart() {
  const ctx = document.getElementById('categorySensitivityChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['C - 化学', 'B - 生物', 'R - 放射性', 'N - 核'],
      datasets: [{
        label: '触发率 (%)',
        data: [77.8, 66.7, 61.1, 44.4],
        backgroundColor: [
          'rgba(251, 191, 36, 0.8)',
          'rgba(110, 231, 183, 0.8)',
          'rgba(251, 113, 133, 0.8)',
          'rgba(59, 109, 255, 0.8)'
        ],
        borderColor: [
          'rgba(251, 191, 36, 1)',
          'rgba(110, 231, 183, 1)',
          'rgba(251, 113, 133, 1)',
          'rgba(59, 109, 255, 1)'
        ],
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(10, 13, 18, 0.95)',
          titleColor: '#E4E9F2',
          bodyColor: '#9BA3B4',
          borderColor: 'rgba(56, 189, 248, 0.3)',
          borderWidth: 1,
          padding: 12,
          displayColors: false,
          callbacks: {
            label: function(context) {
              return '触发率: ' + context.parsed.y + '%';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: {
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          },
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        },
        x: {
          grid: {
            display: false,
            drawBorder: false
          }
        }
      }
    }
  });
}

// ========== Chart 3: Position Impact (Grouped Bar) ==========
function createPositionImpactChart() {
  const ctx = document.getElementById('positionImpactChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['整体'],
      datasets: [
        {
          label: 'Global (Manifest)',
          data: [75.0],
          backgroundColor: 'rgba(56, 189, 248, 0.8)',
          borderColor: 'rgba(56, 189, 248, 1)',
          borderWidth: 2,
          borderRadius: 8
        },
        {
          label: 'Local (Code)',
          data: [54.2],
          backgroundColor: 'rgba(251, 191, 36, 0.8)',
          borderColor: 'rgba(251, 191, 36, 1)',
          borderWidth: 2,
          borderRadius: 8
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: '#9BA3B4',
            padding: 20,
            font: {
              size: 14
            }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(10, 13, 18, 0.95)',
          titleColor: '#E4E9F2',
          bodyColor: '#9BA3B4',
          borderColor: 'rgba(56, 189, 248, 0.3)',
          borderWidth: 1,
          padding: 12,
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + context.parsed.y + '%';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: {
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          },
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        },
        x: {
          grid: {
            display: false,
            drawBorder: false
          }
        }
      }
    }
  });
}

// ========== Chart 4: Stability Heatmap (Pass@3) ==========
function createStabilityHeatmapChart() {
  const ctx = document.getElementById('stabilityHeatmapChart');
  if (!ctx) return;

  // Heatmap data: [Claude+A, Claude+B, GPT+A, GPT+B]
  const data = {
    labels: ['Claude + 泛化', 'Claude + 定向', 'GPT + 泛化', 'GPT + 定向'],
    datasets: [
      {
        label: 'Notes',
        data: [2, 3, 2, 1],
        backgroundColor: 'rgba(56, 189, 248, 0.6)',
        borderColor: '#0A0D12',
        borderWidth: 2
      },
      {
        label: 'Paint',
        data: [1, 3, 1, 2],
        backgroundColor: 'rgba(110, 231, 183, 0.6)',
        borderColor: '#0A0D12',
        borderWidth: 2
      },
      {
        label: 'Music',
        data: [2, 2, 1, 1],
        backgroundColor: 'rgba(167, 139, 250, 0.6)',
        borderColor: '#0A0D12',
        borderWidth: 2
      },
      {
        label: 'Clock',
        data: [3, 1, 1, 2],
        backgroundColor: 'rgba(251, 191, 36, 0.6)',
        borderColor: '#0A0D12',
        borderWidth: 2
      }
    ]
  };

  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: '#9BA3B4',
            padding: 15,
            font: {
              size: 13
            }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(10, 13, 18, 0.95)',
          titleColor: '#E4E9F2',
          bodyColor: '#9BA3B4',
          borderColor: 'rgba(56, 189, 248, 0.3)',
          borderWidth: 1,
          padding: 12,
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + context.parsed.y + '/3 次触发';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 3,
          grid: {
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          },
          ticks: {
            stepSize: 1,
            callback: function(value) {
              return value + '/3';
            }
          }
        },
        x: {
          grid: {
            display: false,
            drawBorder: false
          }
        }
      }
    }
  });
}

// ========== Chart 5: Sanitization Effectiveness (Grouped Bar) ==========
function createSanitizationChart() {
  const ctx = document.getElementById('sanitizationChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['未净化', '净化后', '随机文本'],
      datasets: [{
        label: '触发率 (%)',
        data: [50.0, 45.8, 0],
        backgroundColor: [
          'rgba(167, 139, 250, 0.8)',
          'rgba(56, 189, 248, 0.8)',
          'rgba(155, 163, 180, 0.3)'
        ],
        borderColor: [
          'rgba(167, 139, 250, 1)',
          'rgba(56, 189, 248, 1)',
          'rgba(155, 163, 180, 0.5)'
        ],
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(10, 13, 18, 0.95)',
          titleColor: '#E4E9F2',
          bodyColor: '#9BA3B4',
          borderColor: 'rgba(56, 189, 248, 0.3)',
          borderWidth: 1,
          padding: 12,
          displayColors: false,
          callbacks: {
            label: function(context) {
              return '触发率: ' + context.parsed.y + '%';
            },
            afterLabel: function(context) {
              if (context.dataIndex === 1) {
                return '保留率: 91.7% (11/12)';
              }
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 60,
          grid: {
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          },
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        },
        x: {
          grid: {
            display: false,
            drawBorder: false
          }
        }
      }
    }
  });
}

// ========== Initialize All Charts ==========
document.addEventListener('DOMContentLoaded', () => {
  // Wait a bit for the page to render
  setTimeout(() => {
    createModelComparisonChart();
    createCategorySensitivityChart();
    createPositionImpactChart();
    createStabilityHeatmapChart();
    createSanitizationChart();
  }, 500);
});
