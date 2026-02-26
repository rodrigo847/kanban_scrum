import re

with open('public/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern para encontrar e substituir no moveCardBack
old_pattern = r'''                const description = card\.querySelector\('\.text-gray-500'\)\.textContent;
                const dateElement = card\.querySelector\('\.text-blue-600'\);
                const pdfBase64 = card\.getAttribute\('data-pdf'\);
                const pdfName = card\.getAttribute\('data-pdf-name'\);
                let date = null;
                if \(dateElement\) \{
                    const dateText = dateElement\.textContent\.replace\('📅 ', ''\)\.trim\(\);
                    // Converter data de dd/mm/yyyy para yyyy-mm-dd
                    const parts = dateText\.split\('/'\);
                    if \(parts\.length === 3\) \{
                        date = `\$\{parts\[2\]\}-\$\{parts\[1\]\}-\$\{parts\[0\]\}`;
                    \}
                \}'''

new_text = '''                const description = card.querySelector('.text-gray-500').textContent;
                const pdfBase64 = card.getAttribute('data-pdf');
                const pdfName = card.getAttribute('data-pdf-name');
                const date = card.getAttribute('data-date') || null;'''

content = re.sub(old_pattern, new_text, content, flags=re.M)

with open('public/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('✅ moveCardBack corrigido com sucesso!')
