from html.parser import HTMLParser

VOID = {'meta','link','br','img','hr','input','source','wbr'}
class P(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack=[]; self.errs=[]
    def handle_starttag(self,tag,attrs):
        if tag not in VOID: self.stack.append((tag,self.getpos()))
    def handle_endtag(self,tag):
        if tag in VOID: return
        if not self.stack:
            self.errs.append(f'extra </{tag}> at {self.getpos()}'); return
        top=self.stack.pop()
        if top[0]!=tag:
            self.errs.append(f'mismatch: <{top[0]}> {top[1]} closed by </{tag}> at {self.getpos()}')

src=open('website/index.html',encoding='utf-8-sig').read()
p=P(); p.feed(src)
print('errors:', len(p.errs))
for e in p.errs[:20]: print(' ', e)
print('unclosed:', [(t,pos) for t,pos in p.stack])
print('size:', len(src), 'chars')
