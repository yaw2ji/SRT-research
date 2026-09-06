# SRT: Safety-critical Reverse Triggering in LLM-based Android Reverse Engineering

## 项目简介

本项目研究了在LLM驱动的Android逆向工程中主动触发内容安全护栏的方法。我们提出了Safety-critical Reverse Triggering (SRT) 方法，通过在应用代码中注入无害化的安全敏感内容，使LLM-Agent在分析过程中触发安全护栏。

## 主要发现

- **62.5%** 主实验触发率（45/72次成功触发）
- **72次** 有效测试记录（6 APK × 4 SRT × 3 Agent配置）
- **100%** 直接测试触发率
- **91.7%** 无害化保留率

## 在线演示

访问我们的项目网站：[https://您的用户名.github.io/仓库名/](https://您的用户名.github.io/仓库名/)

## 工具：SRT Injector

我们开发了一个自动化的SRT注入工具，支持：
- 🤖 自动化批量处理
- 🎯 灵活的注入策略（4类CBRN + Global/Local位置）
- ✅ 保持应用功能完整性

**即将开源到 GitHub，敬请关注！**

## 项目结构

```
repo/
├── website/           # 项目展示网站
│   ├── index.html    # 主页
│   ├── css/          # 样式文件
│   └── js/           # JavaScript和图表
├── task1/            # 实验一：护栏行为画像
├── task2/            # 实验二：端到端触发
└── task3/            # 实验三：系统性因素分析
```

## 本地运行

1. 克隆仓库
```bash
git clone https://github.com/您的用户名/仓库名.git
cd 仓库名
```

2. 启动本地服务器
```bash
cd website
python -m http.server 8080
```

3. 访问 http://localhost:8080

## 引用

如果您使用了我们的工作，请引用：

```bibtex
@inproceedings{srt2026,
  title={Safety-critical Reverse Triggering in LLM-based Android Reverse Engineering},
  author={待补充},
  booktitle={待补充},
  year={2026}
}
```

## 许可证

[待添加许可证信息]

## 联系方式

[待添加联系方式]
