import matplotlib.pyplot as plt
import matplotlib.patches as patches
from matplotlib import rcParams

# Set font for Japanese characters
rcParams['font.family'] = 'sans-serif'
rcParams['font.sans-serif'] = ['Noto Sans CJK JP', 'Noto Sans JP', 'sans-serif']

def draw_browser_window(ax, title, x, y, width, height, is_broken=False):
    # Window frame
    rect = patches.Rectangle((x, y), width, height, linewidth=1, edgecolor='#ccc', facecolor='#f9f9f9')
    ax.add_patch(rect)
    
    # Title bar
    ax.add_patch(patches.Rectangle((x, y + height - 20), width, 20, color='#e0e0e0'))
    ax.text(x + 10, y + height - 14, title, fontsize=8, color='#333')
    
    # Content area
    content_y = y
    content_height = height - 20
    
    # Header
    header_height = 40
    ax.add_patch(patches.Rectangle((x, y + content_height - header_height), width, header_height, color='#fff', alpha=0.9))
    
    # Logo
    ax.text(x + 15, y + content_height - 25, "みえタス", fontsize=10, fontweight='bold', color='#0f172a')
    
    # Nav links
    nav_x = x + 100
    nav_y = y + content_height - 25
    links = ["機能", "他社比較", "導入事例", "料金"]
    for i, link in enumerate(links):
        ax.text(nav_x + i*40, nav_y, link, fontsize=6, color='#64748b')

    # Buttons
    btn_y = y + content_height - 30
    btn_height = 20
    
    if is_broken:
        # Broken Layout: Buttons overlapping or wrapping weirdly
        # "View Demo" button (overlapping or pushed down)
        ax.add_patch(patches.Rectangle((x + width - 140, btn_y - 10), 80, btn_height, color='#fff', ec='#0f172a'))
        ax.text(x + width - 135, btn_y - 4, "デモ画面を見る", fontsize=5, color='#0f172a')
        
        # "Contact" button (overlapping)
        ax.add_patch(patches.Rectangle((x + width - 100, btn_y), 80, btn_height, color='#0f172a'))
        ax.text(x + width - 90, btn_y + 6, "お問い合わせ", fontsize=5, color='#fff')
        
        # Hero Section (Content pushed down or misaligned)
        hero_y = y + 50
        ax.text(x + 20, hero_y + 60, "クラウドに情報を渡さない、", fontsize=12, fontweight='bold', color='#0f172a')
        ax.text(x + 20, hero_y + 40, "唯一のAIナレッジ基盤。", fontsize=12, fontweight='bold', color='#3b82f6')
        
        # Hero Buttons (Broken alignment)
        ax.add_patch(patches.Rectangle((x + 20, hero_y), 100, 25, color='#0f172a')) # Download
        ax.add_patch(patches.Rectangle((x + 130, hero_y + 10), 80, 25, color='#fff', ec='#0f172a')) # Demo (Misaligned)
        ax.add_patch(patches.Rectangle((x + 200, hero_y), 80, 25, color='#fff', ec='#0f172a')) # Contact (Overlapping)
        
    else:
        # Fixed Layout: Proper spacing and alignment
        # "View Demo" button
        ax.add_patch(patches.Rectangle((x + width - 190, btn_y), 80, btn_height, color='#fff', ec='#0f172a'))
        ax.text(x + width - 185, btn_y + 6, "デモ画面を見る", fontsize=5, color='#0f172a')
        
        # "Contact" button
        ax.add_patch(patches.Rectangle((x + width - 100, btn_y), 80, btn_height, color='#0f172a'))
        ax.text(x + width - 90, btn_y + 6, "お問い合わせ", fontsize=5, color='#fff')
        
        # Hero Section
        hero_y = y + 50
        ax.text(x + 20, hero_y + 60, "クラウドに情報を渡さない、", fontsize=12, fontweight='bold', color='#0f172a')
        ax.text(x + 20, hero_y + 40, "唯一のAIナレッジ基盤。", fontsize=12, fontweight='bold', color='#3b82f6')
        
        # Hero Buttons (Clean alignment with flex-wrap gap)
        ax.add_patch(patches.Rectangle((x + 20, hero_y), 100, 25, color='#0f172a'))
        ax.text(x + 30, hero_y + 8, "資料ダウンロード", fontsize=6, color='#fff')
        
        ax.add_patch(patches.Rectangle((x + 130, hero_y), 80, 25, color='#fff', ec='#0f172a'))
        ax.text(x + 135, hero_y + 8, "デモ画面を見る", fontsize=6, color='#0f172a')
        
        ax.add_patch(patches.Rectangle((x + 220, hero_y), 80, 25, color='#fff', ec='#0f172a'))
        ax.text(x + 230, hero_y + 8, "お問い合わせ", fontsize=6, color='#0f172a')

# Create figure
fig, ax = plt.subplots(figsize=(10, 6))
ax.set_xlim(0, 800)
ax.set_ylim(0, 400)
ax.axis('off')

# Draw "Before" (Broken)
draw_browser_window(ax, "修正前 (Before): ボタン追加によるレイアウト崩れ", 20, 50, 360, 300, is_broken=True)

# Draw "After" (Fixed)
draw_browser_window(ax, "修正後 (After): レイアウト調整済み", 420, 50, 360, 300, is_broken=False)

# Add arrow
ax.arrow(390, 200, 20, 0, head_width=10, head_length=10, fc='#666', ec='#666')

plt.tight_layout()
plt.savefig('/home/ubuntu/mietasu_lp_mockup/layout_comparison.png', dpi=150, bbox_inches='tight')
