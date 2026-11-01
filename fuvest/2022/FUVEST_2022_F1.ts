import { QuizQuestion } from '@/lib/quiz-questions';
const fuvest_2022:QuizQuestion[] = [
  {
    id: 1,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A deficiência na enzima G6PD é uma condição recessiva ligada
ao cromossomo X, que pode ser diagnosticada no teste do
pezinho expandido. Pessoas com deficiência nesta enzima são
suscetíveis à anemia hemolítica ao serem expostas à
cloroquina ou primaquina, drogas amplamente prescritas por
médicos no tratamento da malária. No Brasil, a prevalência de
deficiência em G6PD na população geral varia de acordo com
as áreas mostradas no mapa:

Dombrowski, J G et al. (2017), Malar J, 16:253, doi:10.1186/s12936-017-1889-6 e Monteiro, W M et al. (2014), Mem Inst Oswaldo Cruz, 109:5, 553-568, doi:10.1590/0074-0276140123. Adaptados.

Indique a afirmação correta sobre a segurança da prescrição
de cloroquina nesse contexto.

Note e adote:
População de três regiões brasileiras: Norte = 18 milhões; Nordeste = 58
milhões; Centro-Oeste = 17 milhões.`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q01_1.jpg","width":568,"height":587}],
    alternatives: [
      { id: 'A', type: 'text', value: `Não é necessário fazer o teste do pezinho expandido em
filhos de casais da região Nordeste do Brasil que
apresentem deficiência da G6PD, já que menos de 3% dos
testes serão positivos.` },
      { id: 'B', type: 'text', value: `Aproximadamente 8,5 milhões de pessoas da região
Centro-Oeste do Brasil têm somente um alelo recessivo
para a deficiência em G6PD, sendo assintomáticas.` },
      { id: 'C', type: 'text', value: `Cerca de 900 mil pessoas da região Norte do Brasil podem
desenvolver anemia hemolítica devido ao tratamento com
cloroquina, sendo a maioria do sexo masculino.` },
      { id: 'D', type: 'text', value: `Descendentes de casais que não apresentam deficiência
em G6PD têm mais de 25% de chance de possuírem o alelo
recessivo e podem ser tratados com cloroquina em áreas
onde a malária não seja endêmica.` },
      { id: 'E', type: 'text', value: `Os pacientes do sexo masculino devem ser investigados
quanto à presença de anemia hemolítica na família
paterna caso vivam em regiões onde a malária é
endêmica.` }
    ],
    correct: 'C',
    explanation: `O mapa indica prevalência de aproximadamente 5% no Norte. Aplicando-a a 18 milhões de habitantes, obtêm-se 900 mil pessoas suscetíveis. Como a deficiência é recessiva ligada ao X, manifesta-se mais frequentemente em homens, que possuem apenas um X.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias']
  },
  {
    id: 2,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Por mais bem informado que você possa ser, não dá para
baixar a guarda. Mas por que as notícias falsas – mesmo
aquelas mais improváveis – parecem tão convincentes para
tantas pessoas? Van Bavel, professor de psicologia e ciência
neural da Universidade de Nova York, se especializou em
entender como as crenças políticas e identidades de grupo
influenciam a mente, e descobriu que a identificação com
posições políticas pode interferir em como o cérebro processa
as informações.
Tendemos a rejeitar fatos que ameaçam nosso senso de
identidade e sempre buscar informações que confirmem
nossas próprias crenças, seja por meio de memórias seletivas,
leituras de fontes que estão do nosso lado ou mesmo
interpretando os fatos de determinada maneira. Isso tudo
está relacionado a não querermos ter nossas ideias, gostos,
identidade questionados, e por isso temos dificuldade em
aceitar o que contradiz aquilo em que acreditamos.

Ana Prado. “A ciência explica por que caímos em fake news”.
Superinteressante. 15/06/2018. Adaptado.

De acordo com o texto,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `as pessoas bem informadas estão protegidas de
polêmicas, uma vez que o modo como processam os fatos
tornam suas opiniões mais convincentes.` },
      { id: 'B', type: 'text', value: `o posicionamento político garante a disseminação de
notícias verdadeiras e resulta de crenças já estabelecidas
socialmente.` },
      { id: 'C', type: 'text', value: `a rejeição a questionamentos impede que se admitam
pontos de vista antagônicos, em razão da tendência de se
confirmar crenças pessoais.` },
      { id: 'D', type: 'text', value: `as memórias seletivas auxiliam na rejeição de fatos
contrários à realidade, já que conduzem à interpretação
das reportagens de modo imparcial.` },
      { id: 'E', type: 'text', value: `os fatos hostis normalmente são preteridos por grande
parte da sociedade, embora sejam utilizados como
identificador cultural.` }
    ],
    correct: 'C',
    explanation: `O texto descreve o viés de confirmação: buscamos informações favoráveis às nossas crenças e rejeitamos as que ameaçam nossa identidade. Essa resistência dificulta a aceitação de pontos de vista antagônicos.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 3,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Nas histórias em quadrinhos, o Pantera Negra ganha
habilidades físicas e mentais sobre-humanas ao ingerir ou
aplicar sobre seu corpo uma solução da erva em formato de
coração, cujos efeitos perduram durante a vida do herói, mas
não são transmitidos aos descendentes. Essa planta cresce em
Wakanda, região da África equatorial oriental, onde um
meteorito contendo um metal chamado Vibranium caiu há 10
mil anos e provocou mutações na planta. Uma explicação
coerente com o conhecimento científico para o que ocorreu
nessa situação ficcional é que a erva`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `sofreu mutações em células somáticas pela ação do
Vibranium na época em que o meteorito atingiu Wakanda.` },
      { id: 'B', type: 'text', value: `promoveu mutações no RNA das células do Pantera Negra.` },
      { id: 'C', type: 'text', value: `provocou mutações dominantes relacionadas aos superpoderes nas células germinativas do Pantera Negra.` },
      { id: 'D', type: 'text', value: `é uma planta característica de ambientes de tundra.` },
      { id: 'E', type: 'text', value: `estava em estação de floração quando o meteorito caiu,
causando mutações em suas células germinativas.` }
    ],
    correct: 'E',
    explanation: `Para a mutação persistir nas gerações seguintes da planta, deve atingir células que participem da reprodução. Uma mutação em células germinativas durante a floração é compatível com a transmissão hereditária, ao contrário do efeito adquirido pela ingestão da erva no herói.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias']
  },
  {
    id: 4,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Disponível em http://www.malvados.com.br/.

Considerando a ironia da tirinha, é possível inferir que`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q04_1.jpg","width":604,"height":326}],
    alternatives: [
      { id: 'A', type: 'text', value: `o serviço de transporte público é gerido pelo Estado.` },
      { id: 'B', type: 'text', value: `a qualidade do transporte é uma forma de punição.` },
      { id: 'C', type: 'text', value: `os responsáveis pelo transporte são punidos no Brasil.` },
      { id: 'D', type: 'text', value: `o brasileiro é um povo que tolera a criminalidade.` },
      { id: 'E', type: 'text', value: `o transporte público é responsável pela mobilidade urbana.` }
    ],
    correct: 'B',
    explanation: `A tira aproxima o transporte coletivo de uma punição, explorando ironicamente suas condições precárias. A crítica recai sobre a qualidade do serviço oferecido aos usuários.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 5,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O gráfico mostra dados coletados na cidade do Rio de Janeiro,
entre fevereiro e abril de 2020, período que inclui o início das
medidas de restrição de circulação na cidade por causa da
pandemia de COVID-19. Para cada dia, representado por um
símbolo no gráfico, foram coletadas duas grandezas: uma média
da energia de vibração sísmica durante o dia (na abscissa) e o índice
F (na ordenada), que é a fração de pessoas que saiu de casa
alguma vez naquele dia. A energia sísmica média foi medida em
(nm/s)² na faixa de frequências que tem causas humanas. Os
triângulos representam domingos e feriados; os quadrados
referem-se aos sábados; e os círculos correspondem aos dias úteis
da semana. Para cada um desses subconjuntos de dados, uma reta
média foi obtida, expressando a relação aproximada entre as duas
grandezas medidas.

Dias, F L et al. (2020), Geophysical Research Letters, 47:16,
doi:10.1029/2020GL088748. Adaptado.
Sobre o estudo descrito, o que é possível inferir a partir dos dados
apresentados?`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q05_1.jpg","width":531,"height":532}],
    alternatives: [
      { id: 'A', type: 'text', value: `Em nenhum sábado, a energia sísmica média registrada
superou 380 (nm/s)².` },
      { id: 'B', type: 'text', value: `Em todos os dias úteis da semana, pelo menos 20% das pessoas
permaneceram o tempo todo em casa.` },
      { id: 'C', type: 'text', value: `Em alguns dos dias de domingo ou feriado, a energia sísmica
média foi maior do que 600 (nm/s)².` },
      { id: 'D', type: 'text', value: `Em dias úteis da semana, a energia sísmica média foi maior ou
igual do que em sábados, domingos e feriados, para o mesmo
número de pessoas que saiu de casa em um dia.` },
      { id: 'E', type: 'text', value: `Aos sábados, uma medição de energia sísmica média de
190 (nm/s)² indica que mais de 60% das pessoas saíram de casa
nesse dia.` }
    ],
    correct: 'D',
    explanation: `Comparando dias com a mesma fração F de pessoas fora de casa, a reta dos dias úteis corresponde a energia sísmica maior ou igual à dos outros grupos. O gráfico não autoriza interpretar a correlação como efeito exclusivo do número de pessoas.`,
    subject: ['mat'],
    topics: ['Estatística', 'Questões aleatórias']
  },
  {
    id: 6,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Os mapas mostram uma parte do município de São Paulo. O
mapa I refere-se à população vacinada contra Sars-Cov-2; o
mapa II refere-se à taxa de mortalidade por COVID-19; e o
mapa III refere-se ao Índice de Desenvolvimento Humano.
Tons mais claros indicam valores menores e tons mais
escuros, valores maiores.

Disponível em https://www.labcidade.fau.usp.br/. Maio/2021. Adaptado.

A partir desses dados, é correto afirmar que`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q06_1.jpg","width":569,"height":161},{"src":"/fuvest/2022/images/q06_source_2.jpg","width":569,"height":162},{"src":"/fuvest/2022/images/q06_source_3.jpg","width":569,"height":162},{"src":"/fuvest/2022/images/q06_source_4.jpg","width":569,"height":161}],
    alternatives: [
      { id: 'A', type: 'text', value: `a efetividade da campanha de vacinação coincide com as
áreas de maior IDH.` },
      { id: 'B', type: 'text', value: `a virulência das variantes de Sars-Cov-2 é menor em áreas
de menor IDH.` },
      { id: 'C', type: 'text', value: `as vacinas em áreas de menor IDH demandam maior
tempo para a resposta imunológica do indivíduo.` },
      { id: 'D', type: 'text', value: `a taxa de mortalidade varia porque a população no centro
do município é maior e mais agregada.` },
      { id: 'E', type: 'text', value: `a prevalência das variantes de Sars-Cov-2 é maior em áreas
de maior IDH.` }
    ],
    correct: 'A',
    explanation: `A comparação espacial mostra maior cobertura vacinal nas áreas de IDH mais elevado. O padrão evidencia a associação entre condições socioeconômicas e acesso à vacinação.`,
    subject: ['geo'],
    topics: ['Meio ambiente', 'Questões aleatórias']
  },
  {
    id: 7,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Um aumento no consumo de água e produtos agrícolas por
parte da população brasileira geralmente vem atrelado a um
aumento na pressão exercida sobre o meio ambiente.
Selecione a alternativa que apresenta duas soluções
sustentáveis, de amplo alcance nacional e economicamente
viáveis, para diminuir a expansão dos cultivos sobre a
vegetação nativa e para garantir recursos hídricos de
qualidade para as gerações futuras.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I — Aumento da exportação de produtos agropecuários. II — Criação em larga escala de represas de pequeno porte.` },
      { id: 'B', type: 'text', value: `I — Aumento progressivo da produtividade dos cultivos já existentes. II — Programa amplo de preservação de matas ciliares.` },
      { id: 'C', type: 'text', value: `I — Diminuição do comércio interno de produtos agrícolas. II — Aumento da utilização dos aquíferos para abastecimento dos cultivos.` },
      { id: 'D', type: 'text', value: `I — Aumento da exportação de produtos agropecuários. II — Programa amplo de preservação de matas ciliares.` },
      { id: 'E', type: 'text', value: `I — Diminuição do comércio interno de produtos agrícolas. II — Criação em larga escala de represas de pequeno porte.` }
    ],
    correct: 'B',
    explanation: `O aumento da produtividade dos cultivos existentes permite produzir mais sem ampliar proporcionalmente a área plantada. Um programa amplo de preservação de matas ciliares protege cursos d’água e sua qualidade. Essas medidas sustentáveis compõem a alternativa B.`,
    subject: ['geo'],
    topics: ['Meio ambiente', 'Questões aleatórias']
  },
  {
    id: 8,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Os gráficos mostram três trajetórias distintas com relação ao
número de espécies animais e vegetais, após desmatamento
de áreas da floresta Amazônica:
Após os desmatamentos, os gráficos I, II e III correspondem,
respectivamente, a uma área que foi`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q08_1.jpg","width":446,"height":709}],
    alternatives: [
      { id: 'A', type: 'text', value: `usada para pastagem e depois para cultivo de soja; usada
para cultivo de soja nos primeiros 20 anos e depois
abandonada; abandonada logo após o desmatamento.` },
      { id: 'B', type: 'text', value: `abandonada logo após o desmatamento; usada como
pastagem nos primeiros 20 anos e depois abandonada;
usada para pastagem e depois para cultivo de soja.` },
      { id: 'C', type: 'text', value: `usada como pastagem nos primeiros 20 anos e depois
abandonada; abandonada logo após o desmatamento;
usada para pastagem e depois para cultivo de soja.` },
      { id: 'D', type: 'text', value: `usada como pastagem nos primeiros 20 anos e depois
abandonada; usada para pastagem e depois para cultivo
de soja; abandonada logo após o desmatamento.` },
      { id: 'E', type: 'text', value: `usada para pastagem e depois para cultivo de soja;
abandonada logo após o desmatamento; usada para cultivo
de soja nos primeiros 20 anos e depois abandonada.` }
    ],
    correct: 'C',
    explanation: `I mostra recuperação apenas após um período prolongado de uso como pastagem; II apresenta regeneração desde o abandono imediato; III sofre nova simplificação com a substituição da pastagem pela soja. Essa sequência corresponde a C.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias']
  },
  {
    id: 9,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O gráfico representa o volume celular de um protozoário ciliado
em um gradiente de salinidade:

A partir desses dados, é correto afirmar que o protozoário
ciliado é

Note e adote:
O volume celular do ciliado em seu habitat natural é o referencial 1.
0% corresponde a água doce pura.`,
    images: [{"src":"/fuvest/2022/images/q09_source_2.jpg","width":501,"height":153},{"src":"/fuvest/2022/images/fuvest_2022_q09_1.jpg","width":501,"height":154}],
    alternatives: [
      { id: 'A', type: 'text', value: `de água salobra e seu equilíbrio osmótico ocorre por difusão
passiva em ambientes hiposmóticos.` },
      { id: 'B', type: 'text', value: `de água doce e possui mecanismos de controle osmótico em
ambientes hiperosmóticos.` },
      { id: 'C', type: 'text', value: `marinho e possui mecanismos de controle osmótico em
ambientes hiperosmóticos.` },
      { id: 'D', type: 'text', value: `de água doce e não possui mecanismos de controle osmótico
em ambientes hiposmóticos.` },
      { id: 'E', type: 'text', value: `marinho e não possui mecanismos de controle osmótico em
ambientes hiposmóticos.` }
    ],
    correct: 'E',
    explanation: `O volume de referência é mantido em salinidade marinha. Ao ser colocado em meio menos salino, o ciliado recebe água por osmose e aumenta de volume, evidenciando ausência de regulação eficiente em meio hiposmótico.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias']
  },
  {
    id: 10,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O gráfico mostra linhas de tendência de cinco parâmetros da
água (eixo y), medidos por pesquisadores, durante os estágios
iniciais do processo de eutrofização de uma lagoa, a partir do
momento em que começou a haver aporte de esgoto não
tratado e antes de haver a estabilização do sistema.
Entretanto, os técnicos da companhia de saneamento
notaram que nem todas as tendências mostradas no gráfico
estão corretas.

São corretas apenas as linhas de tendência representadas em`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q10_1.jpg","width":568,"height":129},{"src":"/fuvest/2022/images/q10_source_2.jpg","width":568,"height":129},{"src":"/fuvest/2022/images/q10_source_3.jpg","width":568,"height":129},{"src":"/fuvest/2022/images/q10_source_4.jpg","width":568,"height":129}],
    alternatives: [
      { id: 'A', type: 'text', value: `1, 2 e 3.` },
      { id: 'B', type: 'text', value: `1, 2 e 4.` },
      { id: 'C', type: 'text', value: `2, 3 e 5.` },
      { id: 'D', type: 'text', value: `2, 4 e 5.` },
      { id: 'E', type: 'text', value: `3, 4 e 5.` }
    ],
    correct: 'B',
    explanation: `O esgoto aumenta a disponibilidade de nutrientes nitrogenados (linha 2) e favorece a proliferação de algas (linha 1). O consumo de oxigênio na decomposição faz cair sua concentração (linha 4). A riqueza de espécies não aumenta como em 3, e os decompositores não diminuem como em 5. Portanto são corretas 1, 2 e 4.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias']
  },
  {
    id: 11,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O gráfico representa a proporção de células em diferentes
fases do ciclo celular de dois tecidos humanos (1 e 2), bem
como o efeito do tratamento do tecido 2 com uma substância
que afeta a divisão celular:

Os tecidos 1 e 2 e uma aplicação médica do efeito do
tratamento são, respectivamente:`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q11_1.jpg","width":578,"height":186},{"src":"/fuvest/2022/images/q11_source_2.jpg","width":578,"height":185}],
    alternatives: [
      { id: 'A', type: 'text', value: `muscular, tumoral e quimioterapia.` },
      { id: 'B', type: 'text', value: `ósseo, ovariano e fertilização in vitro.` },
      { id: 'C', type: 'text', value: `nervoso, tumoral e transplante.` },
      { id: 'D', type: 'text', value: `epitelial, ósseo e transfusão sanguínea.` },
      { id: 'E', type: 'text', value: `tumoral, nervoso e radioterapia.` }
    ],
    correct: 'A',
    explanation: `O tecido muscular apresenta baixa proporção de células em divisão, enquanto o tumoral tem proliferação elevada. Uma substância que interrompe o ciclo de células do tecido 2 pode ser aplicada em quimioterapia.`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias']
  },
  {
    id: 12,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Analise o esquema e as estruturas (X, Y e Z) da planta para
completar a frase a seguir.

Às 14h de um dia ensolarado, em condições hídricas ótimas, a
estrutura identificada por _I_ encontra-se _II_, possibilitando
a absorção de água do solo e entrada de CO₂, que é utilizado
pela estrutura representada por _III_ para realização da
fotossíntese.

As lacunas I, II e III podem ser preenchidas corretamente por:

I II III`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q12_1.jpg","width":530,"height":228},{"src":"/fuvest/2022/images/q12_source_2.jpg","width":530,"height":228}],
    alternatives: [
      { id: 'A', type: 'text', value: `Z; aberta; Y.` },
      { id: 'B', type: 'text', value: `Z; fechada; X.` },
      { id: 'C', type: 'text', value: `Y; vazia; X.` },
      { id: 'D', type: 'text', value: `X; cheia; Z.` },
      { id: 'E', type: 'text', value: `X; vazia; Y.` }
    ],
    correct: 'A',
    explanation: `Z identifica o estômato, que em condições hídricas favoráveis pode estar aberto durante o dia. Sua abertura permite a entrada de CO₂ e a transpiração, associada à absorção de água. Y identifica o cloroplasto, onde ocorre a fotossíntese.`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias']
  },
  {
    id: 13,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O esquema a seguir representa o aparecimento de bactérias
mutantes em uma colônia e o resultado de sua exposição a
quatro diferentes condições de cultura:

Disponível em https://edepot.wur.nl/376546/. Adaptado.

Assinale a alternativa com a relação correta entre as mutações
e as condições de cultura.`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q13_1.jpg","width":569,"height":215},{"src":"/fuvest/2022/images/q13_source_2.jpg","width":569,"height":215}],
    alternatives: [
      { id: 'A', type: 'text', value: `A mutação X inativa os transportadores de glicose, e a
condição I tem esse açúcar como fonte exclusiva de carbono.` },
      { id: 'B', type: 'text', value: `A mutação X promove melhor eficiência do equilíbrio
osmótico, e a condição III tem alta salinidade.` },
      { id: 'C', type: 'text', value: `A mutação Y confere resistência ao antibiótico penicilina, e
o meio de cultura da condição II contém esse antibiótico.` },
      { id: 'D', type: 'text', value: `As mutações X e Y conferem vantagem adaptativa às
bactérias na condição IV.` },
      { id: 'E', type: 'text', value: `A frequência de novas mutações será maior na condição IV.` }
    ],
    correct: 'C',
    explanation: `Na condição II, sobrevivem as bactérias portadoras da mutação Y, o que indica resistência ao agente seletivo presente nesse meio. A correspondência correta é Y conferindo resistência à penicilina, contida na condição II.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias']
  },
  {
    id: 14,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O quadrinho a seguir mostra uma paródia entre situações
cotidianas e descobertas científicas.

Quais feitos científicos de Mendeleev, de Watson e Crick e de
Thomson estão relacionados com o quadrinho?`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q14_1.jpg","width":498,"height":221},{"src":"/fuvest/2022/images/q14_source_2.jpg","width":498,"height":220},{"src":"/fuvest/2022/images/q14_source_3.jpg","width":498,"height":220}],
    alternatives: [
      { id: 'A', type: 'text', value: `Proposição de um modelo atômico, descoberta da
estrutura dos polímeros, descoberta da radioatividade.` },
      { id: 'B', type: 'text', value: `Organização dos elementos químicos em uma Tabela
Periódica, descoberta da estrutura do DNA, proposição de
um modelo atômico.` },
      { id: 'C', type: 'text', value: `Compreensão da reatividade dos elementos químicos,
representação simbólica dos elementos, descoberta das
interações moleculares.` },
      { id: 'D', type: 'text', value: `Definição de entalpia, representação simbólica dos
elementos, caracterização e propriedades dos coloides.` },
      { id: 'E', type: 'text', value: `Balanceamento de equações químicas, descoberta da
pilha, organização dos elementos químicos em uma Tabela
Periódica.` }
    ],
    correct: 'B',
    explanation: `Mendeleev organizou os elementos em uma tabela periódica; Watson e Crick propuseram a estrutura em dupla hélice do DNA; Thomson formulou um modelo atômico com elétrons. A sequência é a apresentada em B.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 15,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `No texto do filósofo francês Maurice Merleau-Ponty é
estabelecida uma conexão entre as relações sociais e a
racionalidade dos indivíduos:

A sociedade humana não é uma comunidade de espíritos
racionais, só se pode compreendê-la assim nos países
favorecidos, em que o equilíbrio vital e econômico foi obtido
localmente e por certo tempo.
Maurice Merleau-Ponty, Fenomenologia da percepção, p.89.
Qual sentença, se tomada como verdadeira, reforça a posição
exprimida pelo filósofo no trecho?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `A racionalidade é uma potência espiritual que se impõe
sobre as circunstâncias históricas.` },
      { id: 'B', type: 'text', value: `O equilíbrio vital e econômico é uma força irracional que
se contrapõe aos espíritos racionais.` },
      { id: 'C', type: 'text', value: `Nos países favorecidos, as pessoas são naturalmente mais
racionais.` },
      { id: 'D', type: 'text', value: `A racionalidade das relações sociais depende da estabilidade
de circunstâncias históricas.` },
      { id: 'E', type: 'text', value: `Os espíritos racionais são responsáveis pelo equilíbrio vital
e econômico dos países favorecidos.` }
    ],
    correct: 'D',
    explanation: `Merleau-Ponty relaciona a aparência de uma comunidade plenamente racional a um equilíbrio vital e econômico localizado e temporário. Isso reforça a dependência da racionalidade social em relação a condições históricas estáveis.`,
    subject: ['fil'],
    topics: ['Filosofia Moderna', 'Questões aleatórias']
  },
  {
    id: 16,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A figura sintetiza, de forma simplificada, a variação da pressão
sanguínea (mmHg), da velocidade de circulação sanguínea
(cm/s) e da área total (cm²) em relação aos diversos tipos de
vasos do sistema sanguíneo humano (artérias, arteríolas,
capilares, vênulas e veias):

Com base na figura, é correto afirmar que`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q16_1.jpg","width":559,"height":166},{"src":"/fuvest/2022/images/q16_source_2.jpg","width":559,"height":166}],
    alternatives: [
      { id: 'A', type: 'text', value: `a velocidade aumenta nas vênulas, o que permite às
hemoglobinas descarregarem o O₂.` },
      { id: 'B', type: 'text', value: `a pressão sanguínea cai nos capilares, vênulas e veias pela
presença de válvulas nesses vasos.` },
      { id: 'C', type: 'text', value: `a pressão diminui a partir dos capilares, o que evita
acidentes vasculares em vasos menores.` },
      { id: 'D', type: 'text', value: `a área aumenta na região dos capilares, o que permite
maior eficiência nas trocas gasosas.` },
      { id: 'E', type: 'text', value: `a velocidade é inversamente proporcional à área por conta
do batimento sistólico do coração.` }
    ],
    correct: 'D',
    explanation: `A área transversal total é muito grande nos capilares por sua enorme quantidade. Isso reduz a velocidade do sangue e amplia o contato disponível para trocas gasosas entre sangue e tecidos.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias']
  },
  {
    id: 17,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `No modelo hegemônico, quase todo o treinamento é
reservado para o desenvolvimento muscular, sobrando muito
pouco tempo para a mobilidade, a flexibilidade, o treino
restaurativo, o relaxamento e o treinamento cardiovascular. Na
teoria, seria algo em torno de 70% para o fortalecimento, 20%
para o cárdio e 10% para a flexibilidade e outros. Na prática,
muitos alunos direcionam 100% do tempo para o fortalecimento.
Como a prática cardiovascular é infinitamente mais
significativa e determinante para a nossa saúde orgânica como
um todo, podendo ser considerada o “coração” de um
treinamento consciente e saudável, essa ordem deveria ser
revista.
Nuno Cobra Jr. “Fitness não é saúde”. Uol. 06/05/2021. Adaptado.

Sem alteração de sentido, o segundo parágrafo do texto
poderia ser reescrito da seguinte maneira:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Ainda que a prática cardiovascular seja infinitamente mais
significativa e determinante para a nossa saúde orgânica
como um todo, essa ordem deveria ser revista, podendo
ser considerada o “coração” de um treinamento
consciente e saudável.` },
      { id: 'B', type: 'text', value: `Para evitar que a prática cardiovascular se torne
infinitamente mais significativa e determinante para a
nossa saúde orgânica como um todo, podendo ser
considerada o “coração” de um treinamento consciente e
saudável, essa ordem deveria ser revista.` },
      { id: 'C', type: 'text', value: `Quando a prática cardiovascular for infinitamente mais
significativa e determinante para a nossa saúde orgânica
como um todo, essa ordem deveria ser revista, podendo
ser considerada o “coração” de um treinamento
consciente e saudável.` },
      { id: 'D', type: 'text', value: `Quanto mais a prática cardiovascular é infinitamente mais
significativa e determinante para a nossa saúde orgânica
como um todo, podendo ser considerada o “coração” de
um treinamento consciente e saudável, essa ordem
deveria ser revista.` },
      { id: 'E', type: 'text', value: `Essa ordem deveria ser revista: a prática cardiovascular é
infinitamente mais significativa e determinante para a
nossa saúde orgânica como um todo, podendo ser
considerada o “coração” de um treinamento consciente e
saudável.` }
    ],
    correct: 'E',
    explanation: `O segundo parágrafo apresenta a importância do exercício cardiovascular como razão para rever a distribuição do treino. A alternativa E conserva essa relação, usando os dois-pontos para introduzir a justificativa.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias']
  },
  {
    id: 18,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `No modelo hegemônico, quase todo o treinamento é
reservado para o desenvolvimento muscular, sobrando muito
pouco tempo para a mobilidade, a flexibilidade, o treino
restaurativo, o relaxamento e o treinamento cardiovascular. Na
teoria, seria algo em torno de 70% para o fortalecimento, 20%
para o cárdio e 10% para a flexibilidade e outros. Na prática,
muitos alunos direcionam 100% do tempo para o fortalecimento.
Como a prática cardiovascular é infinitamente mais
significativa e determinante para a nossa saúde orgânica como
um todo, podendo ser considerada o “coração” de um
treinamento consciente e saudável, essa ordem deveria ser
revista.
Nuno Cobra Jr. “Fitness não é saúde”. Uol. 06/05/2021. Adaptado.

Dentre as expressões destacadas, a que exerce a mesma função
sintática do termo sublinhado em “o treino restaurativo, o
relaxamento e o treinamento cardiovascular” é:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `um atleta de seleção precisa de treinamento intenso.` },
      { id: 'B', type: 'text', value: `o amor ao esporte é fundamental para o atleta.` },
      { id: 'C', type: 'text', value: `a população incorpora radicalmente atitudes saudáveis.` },
      { id: 'D', type: 'text', value: `muitas pessoas se beneficiam de alimentos verdes.` },
      { id: 'E', type: 'text', value: `todo tipo de atividade física faz bem à saúde mental.` }
    ],
    correct: 'A',
    explanation: `No trecho, cardiovascular caracteriza o substantivo treinamento, exercendo função de adjunto adnominal. Em “atleta de seleção”, a expressão de seleção também caracteriza um nome e desempenha essa função.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias']
  },
  {
    id: 19,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Por narrativas paralelas entende-se um procedimento literário
segundo o qual dois ou mais fios narrativos pertencentes a níveis
distintos de realidade se desenrolam intercaladamente formando
um todo. Considerando-se a sua estrutura, as duas narrativas que
podem ser identificadas com base nessa definição são:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Quincas Borba e Nove noites` },
      { id: 'B', type: 'text', value: `Campo geral e Terra sonâmbula` },
      { id: 'C', type: 'text', value: `Angústia e Campo geral` },
      { id: 'D', type: 'text', value: `Nove noites e Terra sonâmbula` },
      { id: 'E', type: 'text', value: `Quincas Borba e Angústia` }
    ],
    correct: 'D',
    explanation: `Nove noites intercala a investigação do narrador e o relato de Manoel Perna. Terra sonâmbula alterna a viagem de Muidinga e Tuahir com os cadernos de Kindzu. Ambas se organizam por narrativas paralelas em níveis distintos.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias']
  },
  {
    id: 20,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `I.

    Suave mari magno*

Lembra-me que, em certo dia,
Na rua, ao sol de verão,
Envenenado morria
   Um pobre cão.

Arfava, espumava e ria,
De um riso espúrio e bufão,
Ventre e pernas sacudia
    Na convulsão.

Nenhum, nenhum curioso
Passava, sem se deter,
     Silencioso,

Junto ao cão que ia morrer,
Como se lhe desse gozo
    Ver padecer.

                  Machado de Assis. Ocidentais.


*Expressão latina, retirada de Lucrécio (Da natureza das coisas), a
qual aparece no seguinte trecho: Suave, mari magno, turbantibus
aequora ventis/ E terra magnum alterius spectare laborem. (“É
agradável, enquanto no mar revoltoso os ventos levantam as águas,
observar da terra os grandes esforços de um outro.”).

II.
   Tão certo é que a paisagem depende do ponto de vista, e
   que o melhor modo de apreciar o chicote é ter-lhe o cabo
   na mão.
                  Machado de Assis. Quincas Borba, cap. XVIII.

III.
    Sofia soltou um grito de horror e acordou. Tinha ao pé do
    leito o marido:
   – Que foi? perguntou ele.
   – Ah! respirou Sofia. Gritei, não gritei?
                                      (...)
   – Sonhei que estavam matando você.
   Palha ficou enternecido. Havê-la feito padecer por ele,
   ainda que em sonhos, encheu-o de piedade, mas de uma
   piedade  gostosa, um  sentimento  particular,  íntimo,
   profundo, – que o faria desejar outros pesadelos, para que
   o assassinassem aos olhos dela, e para que ela gritasse
   angustiada, convulsa, cheia de dor e de pavor.

                  Machado de Assis. Quincas Borba, cap. CLXI.

A visão do eu-lírico no texto I`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `volta-se nostálgica para as imagens de uma lembrança.` },
      { id: 'B', type: 'text', value: `centra-se com desprezo na figura do animal agonizante.` },
      { id: 'C', type: 'text', value: `apreende displicentemente o movimento dos transeuntes.` },
      { id: 'D', type: 'text', value: `ganha distância da cena para captar todos os seus aspectos.` },
      { id: 'E', type: 'text', value: `apresenta o espectador da crueldade como um ser incomum.` }
    ],
    correct: 'D',
    explanation: `O eu lírico observa o cão agonizante e, ao mesmo tempo, a reação dos curiosos. Esse distanciamento permite incluir na cena a crueldade e o prazer dos espectadores, sem restringir a visão apenas ao animal.`,
    subject: ['por'],
    topics: ['Análise de obras', 'Questões aleatórias']
  },
  {
    id: 21,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `I.

    Suave mari magno*

Lembra-me que, em certo dia,
Na rua, ao sol de verão,
Envenenado morria
   Um pobre cão.

Arfava, espumava e ria,
De um riso espúrio e bufão,
Ventre e pernas sacudia
    Na convulsão.

Nenhum, nenhum curioso
Passava, sem se deter,
     Silencioso,

Junto ao cão que ia morrer,
Como se lhe desse gozo
    Ver padecer.

                  Machado de Assis. Ocidentais.


*Expressão latina, retirada de Lucrécio (Da natureza das coisas), a
qual aparece no seguinte trecho: Suave, mari magno, turbantibus
aequora ventis/ E terra magnum alterius spectare laborem. (“É
agradável, enquanto no mar revoltoso os ventos levantam as águas,
observar da terra os grandes esforços de um outro.”).

II.
   Tão certo é que a paisagem depende do ponto de vista, e
   que o melhor modo de apreciar o chicote é ter-lhe o cabo
   na mão.
                  Machado de Assis. Quincas Borba, cap. XVIII.

III.
    Sofia soltou um grito de horror e acordou. Tinha ao pé do
    leito o marido:
   – Que foi? perguntou ele.
   – Ah! respirou Sofia. Gritei, não gritei?
                                      (...)
   – Sonhei que estavam matando você.
   Palha ficou enternecido. Havê-la feito padecer por ele,
   ainda que em sonhos, encheu-o de piedade, mas de uma
   piedade  gostosa, um  sentimento  particular,  íntimo,
   profundo, – que o faria desejar outros pesadelos, para que
   o assassinassem aos olhos dela, e para que ela gritasse
   angustiada, convulsa, cheia de dor e de pavor.

                  Machado de Assis. Quincas Borba, cap. CLXI.

A analogia consiste em um recurso de expressão comumente
utilizado para ilustrar um raciocínio por meio da semelhança
que se observa entre dois fatos ou ideias. No texto II, a
analogia construída a partir da imagem do chicote pretende
sugerir que`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `o instrumento do castigo nem sempre cai em mãos justas.` },
      { id: 'B', type: 'text', value: `o apreço aos objetos independe do uso que se faz deles.` },
      { id: 'C', type: 'text', value: `o cabo é metáfora de mérito, e a ponta, metáfora de culpa.` },
      { id: 'D', type: 'text', value: `o mais fraco, por ser compassivo, é incapaz de desfrutar do
poder.` },
      { id: 'E', type: 'text', value: `o prazer verdadeiro se experimenta no lado dos dominantes.` }
    ],
    correct: 'E',
    explanation: `Ter o cabo do chicote significa ocupar a posição de quem exerce o poder, em vez de sofrer seus efeitos. A analogia sugere que o prazer atribuído à situação depende de estar do lado dominante.`,
    subject: ['por'],
    topics: ['Análise de obras', 'Questões aleatórias']
  },
  {
    id: 22,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `I.

    Suave mari magno*

Lembra-me que, em certo dia,
Na rua, ao sol de verão,
Envenenado morria
   Um pobre cão.

Arfava, espumava e ria,
De um riso espúrio e bufão,
Ventre e pernas sacudia
    Na convulsão.

Nenhum, nenhum curioso
Passava, sem se deter,
     Silencioso,

Junto ao cão que ia morrer,
Como se lhe desse gozo
    Ver padecer.

                  Machado de Assis. Ocidentais.


*Expressão latina, retirada de Lucrécio (Da natureza das coisas), a
qual aparece no seguinte trecho: Suave, mari magno, turbantibus
aequora ventis/ E terra magnum alterius spectare laborem. (“É
agradável, enquanto no mar revoltoso os ventos levantam as águas,
observar da terra os grandes esforços de um outro.”).

II.
   Tão certo é que a paisagem depende do ponto de vista, e
   que o melhor modo de apreciar o chicote é ter-lhe o cabo
   na mão.
                  Machado de Assis. Quincas Borba, cap. XVIII.

III.
    Sofia soltou um grito de horror e acordou. Tinha ao pé do
    leito o marido:
   – Que foi? perguntou ele.
   – Ah! respirou Sofia. Gritei, não gritei?
                                      (...)
   – Sonhei que estavam matando você.
   Palha ficou enternecido. Havê-la feito padecer por ele,
   ainda que em sonhos, encheu-o de piedade, mas de uma
   piedade  gostosa, um  sentimento  particular,  íntimo,
   profundo, – que o faria desejar outros pesadelos, para que
   o assassinassem aos olhos dela, e para que ela gritasse
   angustiada, convulsa, cheia de dor e de pavor.

                  Machado de Assis. Quincas Borba, cap. CLXI.

No texto III, ao analisar a interioridade de Palha, o narrador
descobre, no pensamento oculto do negociante,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `a ternura que lhe inspira a mulher, capaz de toda abnegação.` },
      { id: 'B', type: 'text', value: `a piedade que lhe causa a mulher, a quem só guarda desprezo.` },
      { id: 'C', type: 'text', value: `a vaidade que beira o sadismo, ao ver a mulher sofrer por ele.` },
      { id: 'D', type: 'text', value: `o gozo vingativo, visto que a mulher o trai com Carlos Maria.` },
      { id: 'E', type: 'text', value: `o remorso do infiel, pois ele trai a mulher com Maria Benedita.` }
    ],
    correct: 'C',
    explanation: `Palha sente uma piedade gostosa ao imaginar o sofrimento da esposa por ele e chega a desejar novos pesadelos. O narrador revela uma vaidade próxima do sadismo, escondida sob a aparência de ternura.`,
    subject: ['por'],
    topics: ['Análise de obras', 'Questões aleatórias']
  },
  {
    id: 23,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Largo em sentir, em respirar sucinto,
Peno, e calo, tão fino, e tão atento,
Que fazendo disfarce do tormento
Mostro que o não padeço, e sei que o sinto.

O mal, que fora encubro, ou que desminto,
Dentro no coração é que o sustento:
Com que, para penar é sentimento,
Para não se entender, é labirinto.

Ninguém sufoca a voz nos seus retiros;
Da tempestade é o estrondo efeito:
Lá tem ecos a terra, o mar suspiros.

Mas oh do meu segredo alto conceito!
Pois não me chegam a vir à boca os tiros
Dos combates que vão dentro no peito.
Gregório de Matos e Guerra

No soneto, o eu lírico:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `expressa um conflito que confirma a imagem pública do
poeta, conhecido pelo epíteto de “o Boca do Inferno”.` },
      { id: 'B', type: 'text', value: `opta por sufocar a própria voz como estratégia
apaziguadora de suas perturbações de foro íntimo.` },
      { id: 'C', type: 'text', value: `explora a censura que o autor sofreu em sua época, ao ser
impedido de dar expressão aos seus sentimentos.` },
      { id: 'D', type: 'text', value: `estabelece, nos tercetos, um contraponto semântico entre
as metáforas da natureza e da guerra.` },
      { id: 'E', type: 'text', value: `revela-se como um ser atormentado, ao mesmo tempo
que omite a natureza de seu sofrimento.` }
    ],
    correct: 'E',
    explanation: `O eu lírico afirma sofrer intensamente, mas disfarçar e silenciar o tormento. O soneto expõe sua condição atormentada sem esclarecer a natureza do sofrimento.`,
    subject: ['por'],
    topics: ['Escolas literárias', 'Questões aleatórias']
  },
  {
    id: 24,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Nun´Álvares Pereira

Que auréola te cerca?
É a espada que, volteando,
Faz que o ar alto perca
Seu azul negro e brando.

Mas que espada é que, erguida,
Faz esse halo no céu?
É Excalibur, a ungida,
Que o Rei Artur te deu.

´Sperança consumada,
S. Portugal em ser,
Ergue a luz da tua espada
Para a estrada se ver!

Fernando Pessoa. In: “A Coroa”, Parte I, Mensagem.

A primeira parte de Mensagem, organizada como um
correlativo poético do Brasão das Armas de Portugal, perfila
uma série de figuras míticas e históricas que teriam sido
responsáveis pela formação nacional portuguesa. A seleção
de Nun´Álvares Pereira para ocupar o lugar da Coroa`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `sugere, pela imagem do halo de luz, que a verdadeira
nobreza é de espírito.` },
      { id: 'B', type: 'text', value: `destaca, através da referência ao mito arturiano, o seu
sangue bretão.` },
      { id: 'C', type: 'text', value: `distingue, por meio do substantivo “´sperança”, um
regente digno de seu posto.` },
      { id: 'D', type: 'text', value: `enaltece, pela repetição da palavra espada, a guerra como
estrada para o futuro.` },
      { id: 'E', type: 'text', value: `indica, associada ao adjetivo “consumada”, uma visão
desenganada da história.` }
    ],
    correct: 'A',
    explanation: `A auréola e o halo associam a espada a uma luz espiritual. A presença de Nun’Álvares na Coroa do brasão poético sugere uma nobreza de espírito, que ultrapassa a simples hierarquia de títulos.`,
    subject: ['por'],
    topics: ['Literatura portuguesa', 'Questões aleatórias']
  },
  {
    id: 25,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A taxação de livros tem um efeito cascata que acaba
custando caro não apenas ao leitor, como também ao mercado
editorial – que há anos não anda bem das pernas – e, em última
instância, ao desenvolvimento econômico do país. A gente
explica. Taxar um produto significa, quase sempre, um aumento
no valor do produto final. Isso porque ao menos uma parte desse
imposto será repassada ao consumidor, especialmente se
considerarmos que as editoras e livrarias enfrentam há anos uma
crise que agora está intensificada pela pandemia e não poderiam
retirar o valor desse imposto de seu já apertado lucro. Livros mais
caros também resultam em queda de vendas, que, por sua vez,
enfraquece ainda mais editoras e as impede de investir em novas
publicações – especialmente aquelas de menor apelo comercial,
mas igualmente importantes para a pluralidade de ideias. Já deu
para perceber a confusão, não é? Mas, além disso, qual seria o
custo de uma sociedade com menos leitores e menos livros?
Taís Ilhéu. “Por que taxar os livros pode gerar retrocesso social e econômico
no país”. Guia do Estudante. Setembro/2020. Adaptado.

De acordo com o texto, os eventos sequenciais aos quais
alude a expressão “efeito cascata” são:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `livros mais caros, decréscimo de vendas, estímulo às editoras,
supressão de investimento em novas publicações.` },
      { id: 'B', type: 'text', value: `aumento do valor do produto final, queda de vendas,
encolhimento das editoras, aumento do investimento em
novas obras.` },
      { id: 'C', type: 'text', value: `livros mais caros, instabilidade nas vendas,
enfraquecimento das editoras, expansão das publicações.` },
      { id: 'D', type: 'text', value: `aumento do valor do produto final, contração nas vendas,
esgotamento das editoras, falta de investimento em novas
publicações.` },
      { id: 'E', type: 'text', value: `livros mais caros, equilíbrio nas vendas, diminuição das
editoras, carência de investimento em novas publicações.` }
    ],
    correct: 'D',
    explanation: `Segundo o texto, o imposto aumenta o preço, reduz as vendas, enfraquece as editoras e limita o investimento em novas publicações. Essa sequência caracteriza o efeito cascata.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 26,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A taxação de livros tem um efeito cascata que acaba
custando caro não apenas ao leitor, como também ao mercado
editorial – que há anos não anda bem das pernas – e, em última
instância, ao desenvolvimento econômico do país. A gente
explica. Taxar um produto significa, quase sempre, um aumento
no valor do produto final. Isso porque ao menos uma parte desse
imposto será repassada ao consumidor, especialmente se
considerarmos que as editoras e livrarias enfrentam há anos uma
crise que agora está intensificada pela pandemia e não poderiam
retirar o valor desse imposto de seu já apertado lucro. Livros mais
caros também resultam em queda de vendas, que, por sua vez,
enfraquece ainda mais editoras e as impede de investir em novas
publicações – especialmente aquelas de menor apelo comercial,
mas igualmente importantes para a pluralidade de ideias. Já deu
para perceber a confusão, não é? Mas, além disso, qual seria o
custo de uma sociedade com menos leitores e menos livros?
Taís Ilhéu. “Por que taxar os livros pode gerar retrocesso social e econômico
no país”. Guia do Estudante. Setembro/2020. Adaptado.

No texto, os pronomes em negrito referem-se,
respectivamente, a:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `taxação de livros, mercado editorial, crise, queda de vendas.` },
      { id: 'B', type: 'text', value: `taxação de livros, leitor, crise, queda de vendas.` },
      { id: 'C', type: 'text', value: `efeito cascata, mercado editorial, crise, queda de vendas.` },
      { id: 'D', type: 'text', value: `efeito cascata, mercado editorial, livrarias, livros.` },
      { id: 'E', type: 'text', value: `efeito cascata, leitor, crise, livros.` }
    ],
    correct: 'C',
    explanation: `Os pronomes retomam, na ordem, efeito cascata, mercado editorial, crise e queda de vendas. A identificação depende dos antecedentes e do encadeamento do argumento.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias']
  },
  {
    id: 27,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Chega um momento em que a tensão eu/mundo se exprime
mediante uma perspectiva crítica, imanente à escrita, o que torna
o romance não mais uma variante literária da rotina social, mas
o seu avesso; logo, o oposto do discurso ideológico do homem
médio. O romancista “imitaria” a vida, sim, mas qual vida?
Aquela cujo sentido dramático escapa a homens e mulheres
entorpecidos ou automatizados por seus hábitos cotidianos. A
vida como objeto de busca e construção, e não a vida como
encadeamento de tempos vazios e inertes. Caso essa pobre vida-morte deva ser tematizada, ela aparecerá como tal, degradada,
sem a aura positiva com que as palavras “realismo” e “realidade”
são usadas nos discursos que fazem a apologia conformista da
“vida como ela é”... A escrita da resistência, a narrativa
atravessada pela tensão crítica, mostra, sem retórica nem alarde
ideológico, que essa “vida como ela é” é, quase sempre, o
ramerrão de um mecanismo alienante, precisamente o contrário
da vida plena e digna de ser vivida.
É nesse sentido que se pode dizer que a narrativa descobre a
vida verdadeira, e que esta abraça e transcende a vida real. A
literatura, com ser ficção, resiste à mentira. É nesse horizonte que
o espaço da literatura, considerado em geral como lugar da
fantasia, pode ser o lugar da verdade mais exigente.
Alfredo Bosi. “Narrativa e resistência”. Adaptado.

O conceito de resistência, expresso pela tensão do indivíduo
perante o mundo, adquire perspectiva crítica na escrita do
romance quando o autor`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `rompe a superfície enganosa da realidade.` },
      { id: 'B', type: 'text', value: `forja um realismo rente à vida mesquinha.` },
      { id: 'C', type: 'text', value: `é neutro ao figurar a vacuidade do presente.` },
      { id: 'D', type: 'text', value: `conserva o discurso positivo da ordem.` },
      { id: 'E', type: 'text', value: `consegue sobrepor a fantasia à verdade.` }
    ],
    correct: 'A',
    explanation: `Para Bosi, a resistência literária revela o que a rotina e a ideologia tornam invisível. O romance crítico rompe a superfície enganosa da realidade e mostra a alienação escondida na aparente normalidade.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 28,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A escrita faz de tal modo parte de nossa civilização que
poderia servir de definição dela própria. A história da
humanidade se divide em duas imensas eras: antes e a partir
da escrita. Talvez venha o dia de uma terceira era — depois da
escrita. Vivemos os séculos da civilização escrita. Todas as
nossas sociedades baseiam-se no escrito. A lei escrita substitui
a lei oral, o contrato escrito substitui a convenção verbal, a
religião escrita se seguiu à tradição lendária. E sobretudo não
existe história que não se funde sobre textos.
Charles Higounet. A história da escrita. Adaptado.

A escrita poderia servir de definição da nossa civilização, uma
vez que`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `a terceira era está prestes a acontecer.` },
      { id: 'B', type: 'text', value: `o escrito respalda as atividades humanas.` },
      { id: 'C', type: 'text', value: `as convenções verbais substituíram o escrito.` },
      { id: 'D', type: 'text', value: `a oralidade deixou de ser usada em períodos remotos.` },
      { id: 'E', type: 'text', value: `os textos pararam de se modificar a partir da escrita.` }
    ],
    correct: 'B',
    explanation: `O texto mostra que leis, contratos, religiões e história se apoiam em registros escritos. Assim, o escrito fundamenta e respalda as atividades e instituições da civilização descrita.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 29,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A escrita faz de tal modo parte de nossa civilização que
poderia servir de definição dela própria. A história da
humanidade se divide em duas imensas eras: antes e a partir
da escrita. Talvez venha o dia de uma terceira era — depois da
escrita. Vivemos os séculos da civilização escrita. Todas as
nossas sociedades baseiam-se no escrito. A lei escrita substitui
a lei oral, o contrato escrito substitui a convenção verbal, a
religião escrita se seguiu à tradição lendária. E sobretudo não
existe história que não se funde sobre textos.
Charles Higounet. A história da escrita. Adaptado.

A locução conjuntiva “de tal modo…que” e o advérbio
“sobretudo”, respectivamente, expressam noção de:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `conformidade e dúvida.` },
      { id: 'B', type: 'text', value: `consequência e realce.` },
      { id: 'C', type: 'text', value: `condição e negação.` },
      { id: 'D', type: 'text', value: `consequência e negação.` },
      { id: 'E', type: 'text', value: `condição e realce.` }
    ],
    correct: 'B',
    explanation: `De tal modo…que introduz uma consequência do grau expresso na oração anterior. Sobretudo destaca o argumento seguinte, produzindo realce.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias']
  },
  {
    id: 30,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Atualmente, no Brasil, coexistem dois sistemas de placas de
identificação de automóveis: o padrão Mercosul (o mais
recente) e aquele que se iniciou em 1990 (o sistema anterior,
usado ainda pela maioria dos carros em circulação). No
sistema anterior, utilizavam-se 3 letras (em um alfabeto de 26
letras) seguidas de 4 algarismos (de 0 a 9). No padrão
Mercosul adotado no Brasil para automóveis, são usadas 4
letras e 3 algarismos, com 3 letras nas primeiras 3 posições e
a quarta letra na quinta posição, podendo haver repetições de
letras ou de números. A figura ilustra os dois tipos de placas.

Dessa forma, o número de placas possíveis do padrão Mercosul
brasileiro de automóveis é maior do que o do sistema anterior em`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q30_1.jpg","width":470,"height":171},{"src":"/fuvest/2022/images/q30_source_2.jpg","width":470,"height":171}],
    alternatives: [
      { id: 'A', type: 'text', value: `1,5 vezes.` },
      { id: 'B', type: 'text', value: `2 vezes.` },
      { id: 'C', type: 'text', value: `2,6 vezes.` },
      { id: 'D', type: 'text', value: `2,8 vezes.` },
      { id: 'E', type: 'text', value: `3 vezes.` }
    ],
    correct: 'C',
    explanation: `O sistema anterior permite 26³ × 10⁴ placas; o Mercosul permite 26⁴ × 10³. A razão entre os totais é 26/10 = 2,6.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Questões aleatórias']
  },
  {
    id: 31,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O sistema de numeração conhecido como chinês científico (ou
em barras) surgiu provavelmente há mais de dois milênios. O
sistema é essencialmente posicional, de base 10, com o
primeiro algarismo à direita representando a unidade. A
primeira linha horizontal de símbolos da figura mostra como
se representam os algarismos 1, 2, 3, 4, 5, 6, 7, 8 e 9 quando
aparecem em posições ímpares (unidades, centenas etc.), e a
segunda linha quando tais algarismos aparecem em posições
pares (dezenas, milhares etc.). Nesse sistema, passou-se a
usar um círculo para representar o algarismo zero a partir da
Dinastia Sung (960-1126).

Howard Eves, Introdução à História da Matemática. Tradução: Hygino H.
Domingues. Editora Unicamp, 2011 (5ª ed.).

Assinale a alternativa que representa o número 91625 nesse
sistema de numeração.`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q31_1.jpg","width":558,"height":137}],
    alternatives: [
      { id: 'A', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q31_altA.jpg` },
      { id: 'B', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q31_altB.jpg` },
      { id: 'C', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q31_altC.jpg` },
      { id: 'D', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q31_altD.jpg` },
      { id: 'E', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q31_altE.jpg` }
    ],
    correct: 'A',
    explanation: `Lendo da direita para a esquerda, as posições de unidades, centenas e dezenas de milhar usam a primeira linha de símbolos, enquanto dezenas e milhares usam a segunda. A sequência para 9, 1, 6, 2 e 5 respeitando essa alternância é a da alternativa A.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Questões aleatórias']
  },
  {
    id: 32,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Um vídeo tem três minutos de duração. Se o vídeo for
reproduzido, desde o seu início, com velocidade de 1,5 vezes
a velocidade original, o tempo de reprodução do vídeo inteiro
será de`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `1min30s.` },
      { id: 'B', type: 'text', value: `1min50s.` },
      { id: 'C', type: 'text', value: `2min00s.` },
      { id: 'D', type: 'text', value: `2min30s.` },
      { id: 'E', type: 'text', value: `2min50s.` }
    ],
    correct: 'C',
    explanation: `O tempo de exibição é inversamente proporcional à velocidade de reprodução. Assim, 3 minutos/1,5 = 2 minutos, ou 2min00s.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias']
  },
  {
    id: 33,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Uma indústria produz três modelos de cadeiras (indicadas por
M₁, M₂ e M₃), cada um deles em duas opções de cores: preta
e vermelha (indicadas por P e V, respectivamente). A tabela
mostra o número de cadeiras produzidas semanalmente
conforme a cor e o modelo:

As porcentagens de cadeiras com defeito são de 2% do
modelo M₁, 5% do modelo M₂ e 8% do modelo M₃. As cadeiras
que não apresentam defeito são denominadas boas.

A tabela que indica o número de cadeiras produzidas
semanalmente com defeito (D) e boas (B), de acordo com a
cor, é:`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q33_1.jpg","width":249,"height":157}],
    alternatives: [
      { id: 'A', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q33_altA.jpg` },
      { id: 'B', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q33_altB.jpg` },
      { id: 'C', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q33_altC.jpg` },
      { id: 'D', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q33_altD.jpg` },
      { id: 'E', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q33_altE.jpg` }
    ],
    correct: 'C',
    explanation: `Para a cor preta, os defeitos são 0,02 × 500 + 0,05 × 400 + 0,08 × 250 = 50; restam 1100 cadeiras boas. Para a vermelha, são 0,02 × 200 + 0,05 × 220 + 0,08 × 300 = 39 defeituosas e 681 boas. A tabela C apresenta esses valores.`,
    subject: ['mat'],
    topics: ['Estatística', 'Questões aleatórias']
  },
  {
    id: 34,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Os funcionários de um salão de beleza compraram um
presente no valor de R$ 200,00 para a recepcionista do
estabelecimento. No momento da divisão igualitária do valor,
dois deles desistiram de participar e, por causa disso, cada
pessoa que ficou no grupo precisou pagar R$ 5,00 a mais que
a quantia originalmente prevista. O valor pago por pessoa que
permaneceu na divisão do custo do presente foi:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `R$ 10,00` },
      { id: 'B', type: 'text', value: `R$ 15,00` },
      { id: 'C', type: 'text', value: `R$ 20,00` },
      { id: 'D', type: 'text', value: `R$ 25,00` },
      { id: 'E', type: 'text', value: `R$ 40,00` }
    ],
    correct: 'D',
    explanation: `Se n era o número inicial de participantes, 200/(n − 2) − 200/n = 5. Isso dá n(n − 2) = 80 e n = 10. Restam 8 pessoas, pagando 200/8 = R$ 25,00 cada uma.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias']
  },
  {
    id: 35,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Uma empresa construiu um poço para armazenar água de
reúso. O custo para construir o primeiro metro foi de
R$ 1.000,00, e cada novo metro custou R$ 200,00 a mais do que
o imediatamente anterior. Se o custo total da construção foi de
R$ 48.600,00, a profundidade do poço é:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `15 m` },
      { id: 'B', type: 'text', value: `18 m` },
      { id: 'C', type: 'text', value: `21 m` },
      { id: 'D', type: 'text', value: `24 m` },
      { id: 'E', type: 'text', value: `27 m` }
    ],
    correct: 'B',
    explanation: `Os custos por metro formam uma progressão aritmética com primeiro termo 1000 e razão 200. A soma de n termos é n[2000 + 200(n − 1)]/2 = 48600. Logo n(n + 9) = 486, cuja solução positiva é n = 18 metros.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias']
  },
  {
    id: 36,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Um deltaedro é um poliedro cujas faces são todas triângulos
equiláteros. Se um deltaedro convexo possui 8 vértices, então
o número de faces desse deltaedro é:

Note e adote:
Em poliedros convexos, vale a relação de Euler F−A+ V= 2, em que F
é o número de faces, A é o número de arestas e V é o número de vértices
do poliedro.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `4` },
      { id: 'B', type: 'text', value: `6` },
      { id: 'C', type: 'text', value: `8` },
      { id: 'D', type: 'text', value: `10` },
      { id: 'E', type: 'text', value: `12` }
    ],
    correct: 'E',
    explanation: `Como cada face triangular tem três arestas e cada aresta pertence a duas faces, 3F = 2A. Na relação de Euler F − A + 8 = 2, a substituição A = 3F/2 fornece F = 12.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias']
  },
  {
    id: 37,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A figura mostra um quadrado e um círculo, ambos com centro no
ponto O. O quadrado tem lado medindo 1 unidade de medida
(u.m.) e o círculo tem raio igual a 2 u.m. O ponto A está sobre o
contorno do quadrado, o ponto B está sobre o contorno do círculo,
e o segmento AB tem tamanho 2 u.m.

Quando o ângulo θ = AÔB for máximo, seu cosseno será:`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q37_1.jpg","width":421,"height":405}],
    alternatives: [
      { id: 'A', type: 'text', value: `1/8` },
      { id: 'B', type: 'text', value: `1/4` },
      { id: 'C', type: 'text', value: `1/2` },
      { id: 'D', type: 'text', value: `√2/2` },
      { id: 'E', type: 'text', value: `√3/2` }
    ],
    correct: 'A',
    explanation: `No triângulo AOB, OB = AB = 2. Pela lei dos cossenos, cos θ = OA/4. Maximizar θ equivale a minimizar OA, cuja menor distância do centro à borda do quadrado é 1/2. Logo cos θ = 1/8.`,
    subject: ['mat'],
    topics: ['Trigonometria', 'Questões aleatórias']
  },
  {
    id: 38,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Suponha que o polinômio p(x) = x³+ mx−2, em que m é
um número real, tenha uma raiz real dupla a e uma raiz real
simples b. O valor da soma de m com a é:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `0` },
      { id: 'B', type: 'text', value: `–1` },
      { id: 'C', type: 'text', value: `−2` },
      { id: 'D', type: 'text', value: `−3` },
      { id: 'E', type: 'text', value: `−4` }
    ],
    correct: 'E',
    explanation: `Como a é raiz dupla, p′(a) = 3a² + m = 0, logo m = −3a². Em p(a) = 0, resulta −2a³ − 2 = 0, portanto a = −1 e m = −3. Assim m + a = −4.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias']
  },
  {
    id: 39,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Quatro tanques cilíndricos são vistos de cima (em planta
baixa) conforme a figura. Todos têm 10 m de raio e seus
centros se posicionam em vértices dos dois quadrados
tracejados adjacentes, ambos com 30 m de lado. Uma fita de
isolamento, esticada e paralela ao solo, envolve os 4 tanques,
dando uma volta completa (linha em laranja na figura).

O comprimento da fita, em metros, é:`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q39_1.jpg","width":625,"height":174},{"src":"/fuvest/2022/images/fuvest_2022_q39_2.jpg","width":625,"height":173},{"src":"/fuvest/2022/images/fuvest_2022_q39_3.jpg","width":625,"height":174},{"src":"/fuvest/2022/images/fuvest_2022_q39_4.jpg","width":625,"height":173},{"src":"/fuvest/2022/images/fuvest_2022_q39_5.jpg","width":625,"height":173}],
    alternatives: [
      { id: 'A', type: 'text', value: `20π+ 30(3 + √2)` },
      { id: 'B', type: 'text', value: `20π+ 30(4 + √2)` },
      { id: 'C', type: 'text', value: `25π+ 15(4 + √2)` },
      { id: 'D', type: 'text', value: `25π+ 30(4 + √2)` },
      { id: 'E', type: 'text', value: `25π+ 30(4 + 2√2)` }
    ],
    correct: 'B',
    explanation: `A fita em torno de círculos de mesmo raio soma o perímetro do polígono convexo de seus centros a uma circunferência de raio 10. No desenho, os segmentos retos totalizam 30(4 + √2), e os arcos somam 20π. O comprimento é 20π + 30(4 + √2).`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias']
  },
  {
    id: 40,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Em fevereiro de 2021, um grupo de físicos da Universidade
Federal de Minas Gerais (UFMG) publicou um artigo que foi
capa da importante revista Nature. O texto a seguir foi
retirado de uma reportagem do site da UFMG sobre o artigo:

O nanoscópio, prossegue Ado Jorio (professor da UFMG),
ilumina a amostra com um microscópio óptico usual. O foco
da luz tem o tamanho de um círculo de 1 micrômetro de
diâmetro. “O que o nanoscópio faz é inserir uma nanoantena,
que tem uma ponta com diâmetro de 10 nanômetros, dentro
desse foco de 1 micrômetro e escanear essa ponta. A imagem
com resolução nanométrica é formada por esse processo de
escaneamento da nanoantena, que localiza o campo
eletromagnético da luz em seu ápice”, afirma o professor.

Itamar Rigueira Jr. “Nanoscópio da UFMG possibilita compreender estrutura que
torna grafeno supercondutor”. Adaptado. Disponível em
https://ufmg.br/comunicacao/noticias/.
Gadelha A C et al. (2021), Nature, 590, 405-409, doi: 10.1038/s41586-021-03252-5.

Com base nos dados mencionados no texto, a razão entre o
diâmetro do foco da luz de um microscópio óptico usual e o
diâmetro da ponta da nanoantena utilizada no nanoscópio é
da ordem de:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `0,0001` },
      { id: 'B', type: 'text', value: `0,01` },
      { id: 'C', type: 'text', value: `1` },
      { id: 'D', type: 'text', value: `100` },
      { id: 'E', type: 'text', value: `10000` }
    ],
    correct: 'D',
    explanation: `Um micrômetro corresponde a 1000 nanômetros. Portanto a razão entre 1 μm e 10 nm é 1000/10 = 100.`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias']
  },
  {
    id: 41,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A quantidade de bactérias em um líquido é diretamente
proporcional à medida da turbidez desse líquido. O gráfico
mostra, em escala logarítmica, o crescimento da turbidez x de
um líquido ao longo do tempo t (medido em minutos), isto é,
mostra log₁₀x em função de t. Os dados foram coletados de
30 em 30 minutos, e uma curva de interpolação foi obtida
para inferir valores intermediários.

Disponível em https://fankhauserblog.wordpress.com/.

Com base no gráfico, em quantas vezes a população de
bactérias aumentou, do instante t₀ para o instante t₁?`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q41_1.jpg","width":506,"height":214},{"src":"/fuvest/2022/images/fuvest_2022_q41_2.jpg","width":506,"height":213}],
    alternatives: [
      { id: 'A', type: 'text', value: `2` },
      { id: 'B', type: 'text', value: `4` },
      { id: 'C', type: 'text', value: `5` },
      { id: 'D', type: 'text', value: `10` },
      { id: 'E', type: 'text', value: `100` }
    ],
    correct: 'D',
    explanation: `Entre t₀ e t₁, o valor de log₁₀x aumenta em uma unidade. Isso corresponde a multiplicar x por 10; como a população é proporcional à turbidez, também cresce dez vezes.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias']
  },
  {
    id: 42,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Fatbergs are a
growing scourge infesting
cities around the world—
some are more than 800
feet long and weigh more
than four humpback
whales. These gross globs,
which can cause sewer
systems to block up and even overflow, have been plaguing the
U.S., Great Britain and Australia for the past decade, forcing
governments and utilities companies to send workers down into
the sewers armed with water hoses, vacuums and scrapers with
the unenviable task of prying them loose.
"It is hard not to think of [fatbergs] as a tangible symbol of the
way we live now, the ultimate product of our disposable, out of
sight, out of mind culture," wrote journalist Tim Adams in The
Guardian.
At their core, fatbergs are the accumulation of oil and grease
that's been poured down the drain, congealing around flushed
nonbiological waste like tampons, condoms and baby wipes.
When fat sticks to the side of sewage pipes, the wipes and other
detritus get stuck, accumulating layer upon layer of gunk in a sort
of slimy snowball effect.
Fatbergs also collect other kinds of debris—London fatbergs
have been cracked open to reveal pens, false teeth and even
watches.
Restaurants are a big contributor to fatbergs: Thames Water,
the London utilities company, found nine out of 10 fast-food
eateries lacked adequate grease traps to stop fat from entering
the sewers. Homeowners also contribute to the problem by
pouring grease and fat down the sink.
Even though its component materials are soft, fatbergs
themselves can be tough as rocks. Researchers have found a host
of dangerous bacteria in fatbergs, including listeria and e.coli.
Fatbergs are notorious for their fetid smell, which can make
even the hardiest sewer workers gag, and chipping away at one
can release noxious gases.
The key to fatberg prevention is remembering the four Ps:
Pee, poo, puke and (toilet) paper are the only things that should
be flushed.
Newsweek, 14 March, 2019. Adaptado.

O texto informa que, na opinião do jornalista Tim Adams, os
fatbergs`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q42_1.jpg","width":369,"height":117},{"src":"/fuvest/2022/images/fuvest_2022_q42_2.jpg","width":369,"height":116}],
    alternatives: [
      { id: 'A', type: 'text', value: `integram a paisagem londrina, causando impacto em razão
de suas dimensões.` },
      { id: 'B', type: 'text', value: `constituem representação real dos hábitos humanos
atuais.` },
      { id: 'C', type: 'text', value: `simbolizam aspectos culturais submetidos a análises
racionais.` },
      { id: 'D', type: 'text', value: `desafiam o repertório tecnológico da engenharia de águas.` },
      { id: 'E', type: 'text', value: `demonstram incentivo para que moradores consolidem
seus costumes.` }
    ],
    correct: 'B',
    explanation: `Tim Adams considera os fatbergs um símbolo tangível da cultura do descarte e do afastamento daquilo que não se quer ver. Assim, eles representam concretamente hábitos humanos atuais.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 43,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Fatbergs are a
growing scourge infesting
cities around the world—
some are more than 800
feet long and weigh more
than four humpback
whales. These gross globs,
which can cause sewer
systems to block up and even overflow, have been plaguing the
U.S., Great Britain and Australia for the past decade, forcing
governments and utilities companies to send workers down into
the sewers armed with water hoses, vacuums and scrapers with
the unenviable task of prying them loose.
"It is hard not to think of [fatbergs] as a tangible symbol of the
way we live now, the ultimate product of our disposable, out of
sight, out of mind culture," wrote journalist Tim Adams in The
Guardian.
At their core, fatbergs are the accumulation of oil and grease
that's been poured down the drain, congealing around flushed
nonbiological waste like tampons, condoms and baby wipes.
When fat sticks to the side of sewage pipes, the wipes and other
detritus get stuck, accumulating layer upon layer of gunk in a sort
of slimy snowball effect.
Fatbergs also collect other kinds of debris—London fatbergs
have been cracked open to reveal pens, false teeth and even
watches.
Restaurants are a big contributor to fatbergs: Thames Water,
the London utilities company, found nine out of 10 fast-food
eateries lacked adequate grease traps to stop fat from entering
the sewers. Homeowners also contribute to the problem by
pouring grease and fat down the sink.
Even though its component materials are soft, fatbergs
themselves can be tough as rocks. Researchers have found a host
of dangerous bacteria in fatbergs, including listeria and e.coli.
Fatbergs are notorious for their fetid smell, which can make
even the hardiest sewer workers gag, and chipping away at one
can release noxious gases.
The key to fatberg prevention is remembering the four Ps:
Pee, poo, puke and (toilet) paper are the only things that should
be flushed.
Newsweek, 14 March, 2019. Adaptado.

De acordo com o texto, o processo de bloqueio do fluxo de
esgoto, provocado pelos fatbergs, ocorre`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q42_1.jpg","width":369,"height":117},{"src":"/fuvest/2022/images/fuvest_2022_q42_2.jpg","width":369,"height":116}],
    alternatives: [
      { id: 'A', type: 'text', value: `por falha no sistema de limpeza das galerias a cargo das
prefeituras.` },
      { id: 'B', type: 'text', value: `por conta do diâmetro estreito dos canos antigos.` },
      { id: 'C', type: 'text', value: `pela solidificação da água na tubulação, em virtude das
baixas temperaturas.` },
      { id: 'D', type: 'text', value: `pela aderência da gordura e outros detritos nas laterais da
tubulação.` },
      { id: 'E', type: 'text', value: `pelo descolamento de placas de concreto dentro da rede
de abastecimento de água.` }
    ],
    correct: 'D',
    explanation: `A gordura se prende às paredes dos canos e retém lenços e outros resíduos. O acúmulo sucessivo forma uma massa que estreita e pode bloquear a passagem do esgoto.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 44,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Fatbergs are a
growing scourge infesting
cities around the world—
some are more than 800
feet long and weigh more
than four humpback
whales. These gross globs,
which can cause sewer
systems to block up and even overflow, have been plaguing the
U.S., Great Britain and Australia for the past decade, forcing
governments and utilities companies to send workers down into
the sewers armed with water hoses, vacuums and scrapers with
the unenviable task of prying them loose.
"It is hard not to think of [fatbergs] as a tangible symbol of the
way we live now, the ultimate product of our disposable, out of
sight, out of mind culture," wrote journalist Tim Adams in The
Guardian.
At their core, fatbergs are the accumulation of oil and grease
that's been poured down the drain, congealing around flushed
nonbiological waste like tampons, condoms and baby wipes.
When fat sticks to the side of sewage pipes, the wipes and other
detritus get stuck, accumulating layer upon layer of gunk in a sort
of slimy snowball effect.
Fatbergs also collect other kinds of debris—London fatbergs
have been cracked open to reveal pens, false teeth and even
watches.
Restaurants are a big contributor to fatbergs: Thames Water,
the London utilities company, found nine out of 10 fast-food
eateries lacked adequate grease traps to stop fat from entering
the sewers. Homeowners also contribute to the problem by
pouring grease and fat down the sink.
Even though its component materials are soft, fatbergs
themselves can be tough as rocks. Researchers have found a host
of dangerous bacteria in fatbergs, including listeria and e.coli.
Fatbergs are notorious for their fetid smell, which can make
even the hardiest sewer workers gag, and chipping away at one
can release noxious gases.
The key to fatberg prevention is remembering the four Ps:
Pee, poo, puke and (toilet) paper are the only things that should
be flushed.
Newsweek, 14 March, 2019. Adaptado.

Considerado o contexto, os quatro elementos associados à
prevenção dos fatbergs têm em comum o fato de`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q42_1.jpg","width":369,"height":117},{"src":"/fuvest/2022/images/fuvest_2022_q42_2.jpg","width":369,"height":116}],
    alternatives: [
      { id: 'A', type: 'text', value: `conterem pouca gordura.` },
      { id: 'B', type: 'text', value: `ocorrerem em quantidade reduzida.` },
      { id: 'C', type: 'text', value: `serem considerados matéria orgânica.` },
      { id: 'D', type: 'text', value: `terem sua frequência controlada.` },
      { id: 'E', type: 'text', value: `estarem livres de bactérias.` }
    ],
    correct: 'C',
    explanation: `Os quatro Ps citados são urina, fezes, vômito e papel higiênico. No contexto da questão, todos são classificados como matéria orgânica, em oposição aos detritos não apropriados ao descarte na rede de esgoto.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 45,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `If you take a look at my smartphone, you’ll know that I like
to order out. But am I helping the small local businesses? You
would think that if you own a restaurant you’d be thrilled to
have an outsourced service that would take care of your
delivery operations while leveraging their marketing might to
expand your businesses’ brand. However, restaurant owners
have complained of lack of quality control once their food goes
out the door. They don’t like that the delivery people are the
face of their product when it gets into the customer’s hand.
Some of the delivery services have been accused of listing
restaurants on their apps without the owners’ permission, and
oftentimes publish menu items and prices that are incorrect or
out of date.
But there is another reason why restaurant owners aren’t
fond of delivery services. It’s the costs, which, for some, are
becoming unsustainable. Even with the increased revenues
from the delivery services, the fees wind up killing a
restaurant’s margins to the extent that it’s at best marginally
profitable. Therefore, some restaurants are pushing harder to
drive orders from their own websites and offering special deals
for customers that use their in-house delivery people.
The simple fact is that these delivery apps are here to stay.
They are enormously popular and have significantly grown. I
believe that restaurant owners that resist these apps are
hurting their brands by missing out on potential customers.
The good news is that the delivery platforms are not as evil as
some would portray them. They have some skin in the game.
They are competing against other services. They want their
listed restaurants to profit. Maybe instead of fighting, the
nation’s restaurant industry needs to proactively embrace the
delivery service industry and figure out ways to profitably work
together.
The Guardian. 02 December, 2020. Adaptado.

De acordo com o texto, para os proprietários de restaurante, a
principal vantagem dos aplicativos de entrega de comida é que eles`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `procuram oferecer taxas atraentes para a utilização de sua
tecnologia.` },
      { id: 'B', type: 'text', value: `demonstram preocupação crescente com a qualidade do
serviço que oferecem.` },
      { id: 'C', type: 'text', value: `melhoram a avaliação dos restaurantes pela imprensa
especializada.` },
      { id: 'D', type: 'text', value: `garantem que suas listas de restaurantes e menus sejam
atualizadas de modo criterioso.` },
      { id: 'E', type: 'text', value: `possuem uma estrutura de marketing que possibilita
expansão do círculo de clientes.` }
    ],
    correct: 'E',
    explanation: `O texto reconhece que as plataformas dispõem de força de marketing para ampliar a exposição dos restaurantes. Essa estrutura pode atrair clientes que o estabelecimento não alcançaria sozinho.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 46,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `If you take a look at my smartphone, you’ll know that I like
to order out. But am I helping the small local businesses? You
would think that if you own a restaurant you’d be thrilled to
have an outsourced service that would take care of your
delivery operations while leveraging their marketing might to
expand your businesses’ brand. However, restaurant owners
have complained of lack of quality control once their food goes
out the door. They don’t like that the delivery people are the
face of their product when it gets into the customer’s hand.
Some of the delivery services have been accused of listing
restaurants on their apps without the owners’ permission, and
oftentimes publish menu items and prices that are incorrect or
out of date.
But there is another reason why restaurant owners aren’t
fond of delivery services. It’s the costs, which, for some, are
becoming unsustainable. Even with the increased revenues
from the delivery services, the fees wind up killing a
restaurant’s margins to the extent that it’s at best marginally
profitable. Therefore, some restaurants are pushing harder to
drive orders from their own websites and offering special deals
for customers that use their in-house delivery people.
The simple fact is that these delivery apps are here to stay.
They are enormously popular and have significantly grown. I
believe that restaurant owners that resist these apps are
hurting their brands by missing out on potential customers.
The good news is that the delivery platforms are not as evil as
some would portray them. They have some skin in the game.
They are competing against other services. They want their
listed restaurants to profit. Maybe instead of fighting, the
nation’s restaurant industry needs to proactively embrace the
delivery service industry and figure out ways to profitably work
together.
The Guardian. 02 December, 2020. Adaptado.

Segundo o texto, uma das soluções encontradas pelos donos
de restaurante para amenizar os problemas com os serviços
de entrega é`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `o contato telefônico com clientes para ouvir comentários
e reclamações.` },
      { id: 'B', type: 'text', value: `a verificação constante das páginas dos aplicativos para
evitar erros e imprecisões.` },
      { id: 'C', type: 'text', value: `o oferecimento de vantagens para clientes que usam os
serviços de entrega do próprio restaurante.` },
      { id: 'D', type: 'text', value: `a listagem de seus restaurantes em diversos aplicativos
para encorajar a competição entre eles.` },
      { id: 'E', type: 'text', value: `a disseminação, junto aos clientes, de uma imagem relativa
aos serviços de aplicativos como incompetentes.` }
    ],
    correct: 'C',
    explanation: `Alguns restaurantes estimulam pedidos em seus próprios sites, oferecendo condições especiais para quem utiliza a entrega interna. Assim tentam diminuir o peso das taxas cobradas pelos aplicativos.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 47,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `If you take a look at my smartphone, you’ll know that I like
to order out. But am I helping the small local businesses? You
would think that if you own a restaurant you’d be thrilled to
have an outsourced service that would take care of your
delivery operations while leveraging their marketing might to
expand your businesses’ brand. However, restaurant owners
have complained of lack of quality control once their food goes
out the door. They don’t like that the delivery people are the
face of their product when it gets into the customer’s hand.
Some of the delivery services have been accused of listing
restaurants on their apps without the owners’ permission, and
oftentimes publish menu items and prices that are incorrect or
out of date.
But there is another reason why restaurant owners aren’t
fond of delivery services. It’s the costs, which, for some, are
becoming unsustainable. Even with the increased revenues
from the delivery services, the fees wind up killing a
restaurant’s margins to the extent that it’s at best marginally
profitable. Therefore, some restaurants are pushing harder to
drive orders from their own websites and offering special deals
for customers that use their in-house delivery people.
The simple fact is that these delivery apps are here to stay.
They are enormously popular and have significantly grown. I
believe that restaurant owners that resist these apps are
hurting their brands by missing out on potential customers.
The good news is that the delivery platforms are not as evil as
some would portray them. They have some skin in the game.
They are competing against other services. They want their
listed restaurants to profit. Maybe instead of fighting, the
nation’s restaurant industry needs to proactively embrace the
delivery service industry and figure out ways to profitably work
together.
The Guardian. 02 December, 2020. Adaptado.

Em “I believe that restaurant owners that resist these apps are
hurting their brands by missing out on potential customers”
(3º parágrafo), a expressão sublinhada pode ser substituída,
sem prejuízo de sentido, por:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `harming.` },
      { id: 'B', type: 'text', value: `deceiving.` },
      { id: 'C', type: 'text', value: `challenging.` },
      { id: 'D', type: 'text', value: `losing.` },
      { id: 'E', type: 'text', value: `disturbing.` }
    ],
    correct: 'D',
    explanation: `Missing out on potential customers significa deixar de alcançar ou perder clientes em potencial. Losing preserva esse sentido na frase.`,
    subject: ['ing'],
    topics: ['Vocabulário', 'Questões aleatórias']
  },
  {
    id: 48,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Lying, thinking
Last night
How to find my soul a home
Where water is not thirsty
And bread loaf is not stone
I came up with one thing
And I don't believe I'm wrong
That nobody,
But nobody
Can make it out here alone

Alone - Maya Angelou

Os versos do poema`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `afirmam os sentimentos de autonomia e autossuficiência.` },
      { id: 'B', type: 'text', value: `mostram a derrota diante das dificuldades.` },
      { id: 'C', type: 'text', value: `expressam o resultado das reflexões feitas.` },
      { id: 'D', type: 'text', value: `indicam a distância intransponível entre amigos.` },
      { id: 'E', type: 'text', value: `mostram arrependimento em relação às decisões do passado.` }
    ],
    correct: 'C',
    explanation: `O poema parte de uma reflexão noturna e chega à conclusão de que ninguém consegue viver inteiramente sozinho. Os versos expressam o resultado desse processo de pensamento.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 49,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Considerando os elementos visuais e verbais da figura, é
possível interpretar a fala da mulher como`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q49_1.jpg","width":543,"height":461}],
    alternatives: [
      { id: 'A', type: 'text', value: `sinal da sua insatisfação com o local escolhido para o
encontro.` },
      { id: 'B', type: 'text', value: `sentimento de inferioridade, por não possuir um telefone
celular.` },
      { id: 'C', type: 'text', value: `constatação de que relações pessoais acarretam exclusão
das redes sociais.` },
      { id: 'D', type: 'text', value: `resposta aos apelos pela troca equitativa de informações.` },
      { id: 'E', type: 'text', value: `expressão sarcástica em protesto pela ausência de
interlocução.` }
    ],
    correct: 'E',
    explanation: `A fala da mulher contrasta ironicamente com a falta de escuta representada na cena. O efeito é um protesto sarcástico pela ausência de interlocução.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 50,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Um bom café deve ser preparado a uma temperatura pouco
acima de 80 °C. Para evitar queimaduras na boca, deve ser
consumido a uma temperatura mais baixa. Uma xícara contém
60 mL de café a uma temperatura de 80 °C. Qual a quantidade de
leite gelado (a uma temperatura de 5 °C) deve ser misturada ao
café para que a temperatura final do café com leite seja de 65 °C?

Note e adote:
Considere que o calor específico e a densidade do café e do leite sejam idênticos.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `5 mL` },
      { id: 'B', type: 'text', value: `10 mL` },
      { id: 'C', type: 'text', value: `15 mL` },
      { id: 'D', type: 'text', value: `20 mL` },
      { id: 'E', type: 'text', value: `25 mL` }
    ],
    correct: 'C',
    explanation: `Igualando o calor perdido pelo café ao recebido pelo leite, 60(80 − 65) = V(65 − 5). Logo V = 900/60 = 15 mL, pois densidade e calor específico são iguais.`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias']
  },
  {
    id: 51,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Uma criança deixa cair de uma mesma altura duas maçãs, uma
delas duas vezes mais pesada do que a outra. Ignorando a
resistência do ar e desprezando as dimensões das maçãs frente à
altura inicial, o que é correto afirmar a respeito das energias
cinéticas das duas maçãs na iminência de atingirem o solo?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `A maçã mais pesada possui tanta energia cinética quanto
a maçã mais leve.` },
      { id: 'B', type: 'text', value: `A maçã mais pesada possui o dobro da energia cinética da
maçã mais leve.` },
      { id: 'C', type: 'text', value: `A maçã mais pesada possui a metade da energia cinética
da maçã mais leve.` },
      { id: 'D', type: 'text', value: `A maçã mais pesada possui o quádruplo da energia
cinética da maçã mais leve.` },
      { id: 'E', type: 'text', value: `A maçã mais pesada possui um quarto da energia cinética
da maçã mais leve.` }
    ],
    correct: 'B',
    explanation: `Sem resistência do ar, as duas maçãs chegam ao solo com a mesma velocidade. Como Ec = mv²/2, a maçã de massa dupla tem o dobro da energia cinética.`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias']
  },
  {
    id: 52,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Uma bola de bilhar vermelha está inicialmente em repouso a
40 cm de duas das bordas (lateral e superior da figura) de uma
mesa de bilhar, como mostra a figura. Uma bola branca de
mesma massa e tamanho é lançada em direção à vermelha
com velocidade v⃗₀ paralela à borda lateral.

As duas bolas colidem e, algum tempo depois, a bola vermelha
está prestes a cair na caçapa posicionada na junção das duas
bordas. No mesmo instante, a bola branca toca a borda
superior da mesa a uma distância d da bola vermelha,
conforme figura.

O valor de d é aproximadamente:

Note e adote:
Despreze efeitos dissipativos (como deslizamentos com atrito) e considere a
colisão entre as bolas como sendo perfeitamente elástica.
Considere que o diâmetro das bolas seja muito menor que as distâncias
mencionadas e que não ocorram outras colisões intermediárias.`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q52_1.jpg","width":514,"height":241}],
    alternatives: [
      { id: 'A', type: 'text', value: `20 cm` },
      { id: 'B', type: 'text', value: `40 cm` },
      { id: 'C', type: 'text', value: `60 cm` },
      { id: 'D', type: 'text', value: `80 cm` },
      { id: 'E', type: 'text', value: `100 cm` }
    ],
    correct: 'D',
    explanation: `Em colisão elástica entre massas iguais com uma delas inicialmente parada, as velocidades finais são perpendiculares. A bola vermelha segue a diagonal até a caçapa; a branca se move na direção perpendicular, com componentes que a levam a atingir a borda superior a 80 cm da caçapa.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias']
  },
  {
    id: 53,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Considere a situação indicada na figura, em que um
motor, com o auxílio de uma
polia, ergue verticalmente
uma caixa de massa 12 kg. A
caixa contém materiais frágeis e deve ser erguida com
velocidade constante. Qual é
a magnitude da força vertical
que o motor deve exercer
para realizar a tarefa?

Note e adote: Despreze efeitos de atrito. Aceleração da gravidade: g = 10 m/s².`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q53_1.jpg","width":205,"height":355}],
    alternatives: [
      { id: 'A', type: 'text', value: `0 N` },
      { id: 'B', type: 'text', value: `30 N` },
      { id: 'C', type: 'text', value: `60 N` },
      { id: 'D', type: 'text', value: `120 N` },
      { id: 'E', type: 'text', value: `240 N` }
    ],
    correct: 'D',
    explanation: `A caixa sobe com velocidade constante, logo sua resultante é nula. A polia fixa muda a direção da força sem reduzir seu módulo. O motor deve equilibrar o peso: F = mg = 12 × 10 = 120 N.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias']
  },
  {
    id: 54,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Dois fios muito longos transportam, cada um deles, uma
corrente elétrica de intensidade I, conforme indicado na
figura. Uma partícula de carga +Q, situada a uma distância R
de cada um dos fios, move-se com velocidade constante ao
longo da direção z.

O módulo e sentido da força magnética atuando sobre a carga
devido ao campo magnético produzido pelos fios são dados por:

Note e adote:
O campo magnético produzido por um fio muito longo transportando uma
corrente de valor I tem módulo aproximadamente dado por μ₀ I/2πr, sendo r a
distância do fio até o ponto e μ₀ corresponde a constante de permeabilidade
magnética.`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q54_1.jpg","width":425,"height":270}],
    alternatives: [
      { id: 'A', type: 'text', value: `0` },
      { id: 'B', type: 'text', value: `Qμ₀I/πR e aponta na direção −y` },
      { id: 'C', type: 'text', value: `Qμ₀I/πR e aponta na direção y` },
      { id: 'D', type: 'text', value: `Qμ₀I/πR e aponta na direção −x` },
      { id: 'E', type: 'text', value: `Qμ₀I/πR e aponta na direção x` }
    ],
    correct: `*`,
    explanation: `Questão anulada no gabarito oficial retificado. O campo correct registra * e nenhuma alternativa deve ser considerada resposta oficial. As opções apresentadas não incluem a dependência da força magnética com o módulo da velocidade, embora F = Q(v × B) exija essa grandeza.`,
    subject: ['fis'],
    topics: ['Eletricidade', 'Questões aleatórias']
  },
  {
    id: 55,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Um componente eletrônico tem curva característica mostrada no
gráfico a seguir:

A resistência elétrica do componente na região em que ele se
comporta como um resistor ôhmico vale aproximadamente:`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q55_1.jpg","width":455,"height":313}],
    alternatives: [
      { id: 'A', type: 'text', value: `0,4 Ω` },
      { id: 'B', type: 'text', value: `0,6 Ω` },
      { id: 'C', type: 'text', value: `0,8 Ω` },
      { id: 'D', type: 'text', value: `1,0 Ω` },
      { id: 'E', type: 'text', value: `1,2 Ω` }
    ],
    correct: 'C',
    explanation: `Na região retilínea da curva tensão-corrente, a resistência é constante e vale R = ΔU/Δi. A inclinação indicada pelos pontos dessa região fornece aproximadamente 0,8 Ω.`,
    subject: ['fis'],
    topics: ['Eletricidade', 'Questões aleatórias']
  },
  {
    id: 56,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O canhão de Newton, esquematizado na figura, é um
experimento mental imaginado por Isaac Newton para
mostrar que sua lei da gravitação era universal. Disparando o
canhão horizontalmente do alto de uma montanha, a bala
cairia na Terra em virtude da força da gravidade. Com uma
maior velocidade inicial, a bala iria mais longe antes de
retornar à Terra. Com a velocidade certa, o projétil daria uma
volta completa em torno da Terra, sempre “caindo” sob ação
da gravidade, mas nunca alcançando a Terra. Newton concluiu
que esse movimento orbital seria da mesma natureza do
movimento da Lua em torno da Terra.

Qual deveria ser a velocidade inicial de um projétil lançado
horizontalmente do alto do Everest (a uma distância
aproximada de 6.400 km do centro da Terra) para colocá-lo
em órbita em torno da Terra?

Note e adote:
Despreze a resistência do ar.
Aceleração da gravidade: g = 10 m/s².`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q56_1.jpg","width":357,"height":355}],
    alternatives: [
      { id: 'A', type: 'text', value: `8 km/s` },
      { id: 'B', type: 'text', value: `11,2 km/s` },
      { id: 'C', type: 'text', value: `80 km/s` },
      { id: 'D', type: 'text', value: `112 km/s` },
      { id: 'E', type: 'text', value: `8.000 km/s` }
    ],
    correct: 'A',
    explanation: `Para a órbita circular próxima à superfície, v²/R = g. Com R = 6,4 × 10⁶ m, v = √(10 × 6,4 × 10⁶) = 8000 m/s = 8 km/s.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias']
  },
  {
    id: 57,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Em virtude do movimento das placas tectônicas, a distância entre
a América do Sul e a África aumenta, nos dias atuais, cerca de
2,0 cm a cada ano. Supondo que essa velocidade tivesse sido
constante ao longo do tempo, e tomando uma distância atual de
cerca de 5.000 km entre os limites dessas duas massas
continentais, indique a melhor estimativa para quanto tempo
teria transcorrido desde quando ambas estavam unidas em um
único supercontinente.

Note e adote:
O valor obtido, embora da ordem de magnitude correta, não é o mesmo
calculado por estimativas mais precisas.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `250.000 anos` },
      { id: 'B', type: 'text', value: `2.500.000 anos` },
      { id: 'C', type: 'text', value: `25.000.000 anos` },
      { id: 'D', type: 'text', value: `250.000.000 anos` },
      { id: 'E', type: 'text', value: `2.500.000.000 anos` }
    ],
    correct: 'D',
    explanation: `A distância de 5000 km corresponde a 5 × 10⁸ cm. À taxa de 2 cm/ano, o tempo seria 2,5 × 10⁸ anos, ou 250 milhões de anos.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias']
  },
  {
    id: 58,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Uma mancha de petróleo com mais de 3000 km de extensão se
espalhou por praias e manguezais da costa da região nordeste e
parte do sudeste, atingindo áreas marinhas protegidas como o
Parque Nacional Marinho de Abrolhos, um dos principais bancos
de corais e berço de biodiversidade do Atlântico Sul. Desde que
foi detectada pela primeira vez, no dia 30 de agosto de 2019, a
mancha de petróleo atingiu cerca de 900 locais em mais de 127
municípios em 11 estados. A origem do petróleo está estimada
em algum local a leste do litoral do estado de Pernambuco,
distante, aproximadamente, 600 km da linha de costa.
Disponível em https://www.wwf.org.br/. 2019. Adaptado.

Com base em seus conhecimentos sobre o litoral brasileiro e
as correntes marítimas superficiais que margeiam a costa,
assinale a alternativa correta que aponta o fator que
contribuiu para a dispersão do petróleo.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `As reentrâncias e os recortes do litoral brasileiro, com sua
geomorfologia costeira, foram responsáveis pelo impacto
ambiental causado pelo derramamento de petróleo.` },
      { id: 'B', type: 'text', value: `A presença de correntes marítimas frias em superfície,
características dessa região, com elevado potencial de
transporte de sedimentos, acentuou a dispersão do petróleo.` },
      { id: 'C', type: 'text', value: `A corrente marítima das Falkland (Malvinas), que margeia a
costa brasileira até o litoral da região nordeste, com águas
frias em superfície, potencializou a dispersão do petróleo.` },
      { id: 'D', type: 'text', value: `A reduzida profundidade média do litoral brasileiro
favoreceu a dispersão do petróleo ao longo da costa de
norte a sul, resultando em impactos negativos, em
especial para a fauna marinha.` },
      { id: 'E', type: 'text', value: `A corrente marítima do Brasil, que é caracterizada pelo
movimento de águas superficiais quentes ao longo da
linha de costa e provenientes do Atlântico Equatorial,
espalhou o petróleo.` }
    ],
    correct: 'E',
    explanation: `A Corrente do Brasil transporta águas superficiais quentes de origem equatorial para o sul ao longo da costa. Seu movimento contribui para dispersar o petróleo rumo ao litoral sudeste, conforme a alternativa E.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias']
  },
  {
    id: 59,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A escala cartográfica expressa as dimensões presentes em um
mapa e a sua correspondência no terreno, ou seja, é uma
abstração adotada que permite transpor a realidade terrestre
para o mapa mantendo as proporções. Considerando a
distância de 6 cm entre dois municípios em um mapa com
escala numérica de 1 : 1.000.000, qual é a distância, em linha
reta, entre eles?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `0,6 km` },
      { id: 'B', type: 'text', value: `6 km` },
      { id: 'C', type: 'text', value: `6,6 km` },
      { id: 'D', type: 'text', value: `60 km` },
      { id: 'E', type: 'text', value: `600 km` }
    ],
    correct: 'D',
    explanation: `Na escala 1:1.000.000, cada centímetro representa 1.000.000 cm, ou 10 km. Portanto 6 cm correspondem a 60 km.`,
    subject: ['geo'],
    topics: ['Cartografia', 'Questões aleatórias']
  },
  {
    id: 60,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Eventos climáticos extremos marcaram este ano com vários
exemplos no mundo, atingindo populações inteiras, tanto em
ambientes rurais como urbanos. Dentre esses eventos, pode-se
destacar as inundações na Alemanha no mês de julho, com
regiões acometidas por fortes chuvas.

Área urbana de Schuld, Oeste da Alemanha, antes (à esquerda) e depois (à
direita) da inundação de julho/2021. Disponível em https://www.dw.com/.

Um dos motivos que podem ser relacionados ao evento de
inundação da área destacada é:`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q60_1.jpg","width":320,"height":350},{"src":"/fuvest/2022/images/fuvest_2022_q60_2.jpg","width":320,"height":350}],
    alternatives: [
      { id: 'A', type: 'text', value: `O fato de o rio meandrante desviar da área urbana instalada
nas suas margens, pois o vale estreito é periodicamente
inundado, em especial nos eventos climáticos extremos,
que submergem os morros na cidade.` },
      { id: 'B', type: 'text', value: `A extensão do assentamento urbano que não respeitou os
limites do canal fluvial, acabando por aterrá-lo, o que
levou à inundação diante de um evento climático extremo,
já que os rios não podem ser encobertos.` },
      { id: 'C', type: 'text', value: `A área urbana, que se encontra em um fundo de vale plano
onde há a presença de um canal de rio meandrante, o qual
pode ter suas águas periodicamente extravasadas para a
planície de inundação.` },
      { id: 'D', type: 'text', value: `O insucesso da prevenção da inundação por meio da
retificação do rio, pois se esperava que, mesmo com
volumes excessivos de chuvas, as águas do canal fluvial
não poderiam ser extravasadas para as margens.` },
      { id: 'E', type: 'text', value: `Como a área urbana se encontra em um fundo de vale
rugoso, existe maior facilidade para o assentamento,
porém com o risco de o rio entrelaçado desviar seu curso
único, causando inundações laterais.` }
    ],
    correct: 'C',
    explanation: `O núcleo urbano ocupa um fundo de vale e a planície de inundação de um rio meandrante. Chuvas intensas elevam a vazão e fazem a água extravasar para essa área naturalmente sujeita a cheias.`,
    subject: ['geo'],
    topics: ['Meio ambiente', 'Questões aleatórias']
  },
  {
    id: 61,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O mapa mostra a topografia, os aspectos da paisagem e o tipo
de cobertura vegetal da superfície numa determinada área,
com um observador que, localizado próximo ao leito do rio, vê
a paisagem direcionando seu olhar para o quadrante nordeste.

O cenário a ser visto pelo observador, considerando os aspectos
evidenciados no mapa, é:`,
    images: [{"src":"/fuvest/2022/images/q61_source.jpg","width":618,"height":758}],
    alternatives: [
      { id: 'A', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q61_altA.jpg` },
      { id: 'B', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q61_altB.jpg` },
      { id: 'C', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q61_altC.jpg` },
      { id: 'D', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q61_altD.jpg` },
      { id: 'E', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q61_altE.jpg` }
    ],
    correct: 'B',
    explanation: `O observador olha para nordeste a partir do vale. Nesse sentido, a posição relativa dos morros, do rio e das formações vegetais coincide com o cenário B, respeitando as curvas de nível e os símbolos do mapa.`,
    subject: ['geo'],
    topics: ['Cartografia', 'Questões aleatórias']
  },
  {
    id: 62,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `No dia 23 de março de 2021 o mega navio Ever Given, de
220.000 toneladas e 400 m de comprimento, encalhou no Canal
de Suez no Egito em rota para o porto de Rotterdam, Holanda,
ficando atravessado e preso pelas extremidades. O navio
reflutuou no dia 29 do mesmo mês em razão das condições de
vento e maré, além da operação promovida por rebocadores.

Disponível em https://www.noaa.gov/, https://edition.cnn.com/ e
https://www.tide-forecast.com/. Adaptados.

Com base nos dados fornecidos e em seus conhecimentos, pode-se atribuir o reflutuamento do Ever Given às seguintes condições:`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q62_1.jpg","width":567,"height":621},{"src":"/fuvest/2022/images/fuvest_2022_q62_2.jpg","width":576,"height":391}],
    alternatives: [
      { id: 'A', type: 'text', value: `Formação de um gradiente de pressão entre Ásia e África,
com ventos de Sudoeste e rebaixamento do nível da água
do mar pela maré de quadratura.` },
      { id: 'B', type: 'text', value: `Formação de um gradiente de pressão entre Europa e
África, com ventos de Noroeste e elevação do nível da
água do mar pela maré de sizígia.` },
      { id: 'C', type: 'text', value: `Formação de um gradiente de pressão entre Europa e
África, com ventos de Sudeste e elevação do nível da água
do mar pela maré de quadratura.` },
      { id: 'D', type: 'text', value: `Formação de um gradiente de pressão entre África e
Europa, com ventos de Nordeste e rebaixamento do nível
da água do mar pela maré de sizígia.` },
      { id: 'E', type: 'text', value: `Formação de um gradiente de pressão entre Ásia e Europa,
com predomínio de calmarias e vazante do nível da água
do mar pela maré neutra.` }
    ],
    correct: 'B',
    explanation: `O gradiente de pressão indicado favorece ventos de noroeste. A maré de sizígia, associada ao alinhamento entre Sol, Terra e Lua, eleva o nível da água e, com os rebocadores, contribui para reflutuar o navio.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias']
  },
  {
    id: 63,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Uma forma de conservação do Cerrado é a prática de
queimadas controladas que simulam o ciclo natural do fogo.

Observe a imagem que retrata os efeitos visuais de uma
queimada controlada em um trecho de Cerrado da Estação
Ecológica de Santa Bárbara, no interior do estado de São Paulo.

Nessa área foram conduzidos experimentos com queimadas
controladas, e os resultados sugerem que essa prática é
benéfica para a flora, cujas plantas rebrotam rapidamente
depois da passagem do fogo. Nos grupos vegetais em que as
queimadas produziram mais efeitos positivos foi registrado
até um discreto aumento de espécies vegetais. Antes das
queimadas, os pesquisadores contabilizaram 38 espécies de
gramíneas e 68 de outras ervas. Depois, esses números
subiram para 44 e 74, respectivamente.

Durigan G et al. (2020), Front. For. Glob. Change, 3:13,
doi:10.3389/ffgc.2020.00013. Adaptado.

No bioma Cerrado, de acordo com a informação do texto, a
prática de queimadas controladas`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q63_1.jpg","width":568,"height":319}],
    alternatives: [
      { id: 'A', type: 'text', value: `contribui para a manutenção da biodiversidade local.` },
      { id: 'B', type: 'text', value: `constitui uma técnica de ponta para o plantio agrícola.` },
      { id: 'C', type: 'text', value: `é uma técnica tradicional denominada agricultura itinerante.` },
      { id: 'D', type: 'text', value: `tem como objetivo permitir a pecuária extensiva.` },
      { id: 'E', type: 'text', value: `apresenta desvantagem em termos de ganho para a flora.` }
    ],
    correct: 'A',
    explanation: `O texto relata aumento do número de espécies de gramíneas e de outras ervas após queimadas controladas. No contexto de manejo descrito, o fogo simula um processo natural e contribui para manter a biodiversidade do Cerrado.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias']
  },
  {
    id: 64,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Fonte: El trabajo de cuidados y los trabajadores del cuidado para um futuro com
trabajo decente / OIT (2019). Adaptado.

Conforme definição da Organização Internacional do Trabalho
(OIT), o trabalho de cuidado envolve dois tipos de atividades: as
diretas, como alimentar um bebê ou cuidar de um doente, e as
indiretas como cozinhar ou limpar O gráfico apresenta a
desigualdade de gênero no trabalho de cuidado no mundo,
expressa pela diferença entre homens e mulheres quanto ao
tempo e à remuneração. A partir dos dados apresentados, é
correto afirmar que as regiões com maior e menor desigualdade
são, respectivamente:`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q64_1.jpg","width":568,"height":473}],
    alternatives: [
      { id: 'A', type: 'text', value: `África; Europa/Ásia Central` },
      { id: 'B', type: 'text', value: `Américas; África` },
      { id: 'C', type: 'text', value: `Américas; Ásia/Pacífico` },
      { id: 'D', type: 'text', value: `Países Árabes; Américas` },
      { id: 'E', type: 'text', value: `África; Ásia/Pacífico` }
    ],
    correct: 'D',
    explanation: `Comparando a participação de homens e mulheres no cuidado remunerado e não remunerado, o gráfico mostra maior desigualdade nos Países Árabes e menor nas Américas.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias']
  },
  {
    id: 65,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Texto 1

Minha pele, Luanda
Antessala, Aruanda
Tipo T'Challa, Wakanda
Veneno Black Mamba
Bandoleiro em bando
Qué o comando dessas banda?
'Sa noite cês vão ver mais sangue
Do que Hotel Ruanda

Texto 2

Não sei onde ela tinha ido à escola, mas ela sabia ler e escrever.
Saber escrever era algo perigoso se você tinha um pai exilado no
Burundi. Logo começam a suspeitar que está se correspondendo
com os tutsis que preparam seu retorno a Ruanda, que você é
uma espiã dando informações aos que estão desse lado da
fronteira e poderia facilitar a volta dos tutsis.

Esses textos foram retirados, respectivamente, da música
“Pantera Negra”, de Emicida, e do livro “A mulher de pés
descalços”, de Scholastique Mukasonga, e fazem referência à
guerra civil em Ruanda. Sobre esse conflito, é correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Ocorrido no início do século XX, teve como principal
estopim a disputa por recursos minerais no território de
Ruanda, na divisa com Senegal.` },
      { id: 'B', type: 'text', value: `Ex-colônia belga e inglesa, Ruanda conquistou sua
independência com auxílio norte-americano nos anos
2000, desencadeando a guerra civil.` },
      { id: 'C', type: 'text', value: `Trata-se de um conflito resultante da disputa entre
diferentes grupos religiosos, que resultou na morte de
mais de 800 mil Hutus e Tutsis.` },
      { id: 'D', type: 'text', value: `Apoiados pelos russos e pelos franceses, os Tutsis
tomaram o poder com um golpe de estado na década de
1970, iniciando as tensões que resultaram na guerra civil.` },
      { id: 'E', type: 'text', value: `Ocorrido na década de 1990, teve como origem a disputa
étnico-cultural (Tutsis e Hutus) nos territórios de Ruanda e
Burundi.` }
    ],
    correct: 'E',
    explanation: `A guerra civil e o genocídio de Ruanda ocorreram na década de 1990 e se relacionam a conflitos entre hutus e tutsis, que também afetaram Burundi. Essas divisões foram historicamente agravadas pelo colonialismo e pelas disputas políticas regionais.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias']
  },
  {
    id: 66,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A pandemia da COVID-19 acendeu o alerta sobre os impactos
que a rápida disseminação de enfermidades produz em um
mundo cada vez mais globalizado. Além disso, ressaltou a
importância das pesquisas científicas na descoberta, tratamento
e controle de doenças tropicais negligenciadas, muitas delas
recorrentes em diferentes países do mundo. Os mapas a seguir
indicam as taxas de incidência de doenças tropicais
negligenciadas (total de casos por milhão de habitantes) e o
Produto Interno Bruto (PIB) per capita dos respectivos países.

Fabrício Marques. “Uma agenda para as doenças esquecidas”. Revista
Pesquisa FAPESP, abril/2021. Adaptado.
Em relação à incidência de doenças tropicais negligenciadas,
é correto afirmar:`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q66_1.jpg","width":622,"height":731}],
    alternatives: [
      { id: 'A', type: 'text', value: `Na África, é maior nos países com os maiores PIB per
capita, em especial na região subsaariana.` },
      { id: 'B', type: 'text', value: `Na Ásia, é menor nos países com os menores PIB per
capita, com destaque para Ásia Setentrional.` },
      { id: 'C', type: 'text', value: `Na América do Sul, é menor nos países da América Platina,
com os menores PIB per capita da região.` },
      { id: 'D', type: 'text', value: `Na América do Norte, com elevado PIB per capita, a
incidência é menor em comparação ao Oriente Médio.` },
      { id: 'E', type: 'text', value: `Na Oceania, apesar do PIB per capita elevado, verifica-se
alta incidência, com destaque para a Austrália.` }
    ],
    correct: 'D',
    explanation: `Os mapas mostram incidência menor de doenças tropicais negligenciadas na América do Norte, de elevado PIB per capita, em comparação ao Oriente Médio. Essa leitura não implica que renda seja o único fator determinante dessas doenças.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias']
  },
  {
    id: 67,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A escassez global de semicondutores continua a ter estranhas
repercussões, sobretudo do ponto de vista geopolítico. Há um
ano as indústrias lutam para se abastecer com chips
eletrônicos que equipam aparelhos do dia a dia, de
computadores a torradeiras, passando pelas máquinas de
lavar e consoles de videogames. O episódio atual, no entanto,
surge em um contexto marcado por um questionamento geral
a respeito dos benefícios da globalização e do declínio da
atividade industrial no Ocidente.

Evgeny Morzorov. “Devemos temer um colapso eletrônico?”. Le Monde
Diplomatique Brasil, agosto/2021. Adaptado.
O texto refere-se a uma questão geopolítica contemporânea:
a disputa pelos semicondutores na indústria mundial. Sobre
esse assunto, indique a alternativa correta:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `A produção de semicondutores está concentrada no
sudeste asiático, nos países da 1ª e 2ª geração dos Tigres
Asiáticos, tais como Taiwan, Coreia do Sul, Cingapura e
Indonésia.` },
      { id: 'B', type: 'text', value: `Nos últimos 20 anos, EUA e Europa vêm perdendo
destaque na produção de semicondutores em decorrência
da queda acentuada de investimentos em pesquisa e
inovação.` },
      { id: 'C', type: 'text', value: `A crise da falta de semicondutores revela um dos efeitos
negativos da globalização: a independência da cadeia
produtiva em escala mundial, pouco suscetível a
desequilíbrios de oferta e demanda.` },
      { id: 'D', type: 'text', value: `A Nova Divisão Internacional do Trabalho indica o predomínio
geoeconômico dos países do sudeste asiático, principais
produtores de semicondutores, que têm ampliado, através da
China, sua participação nesse setor desde sua democratização.` },
      { id: 'E', type: 'text', value: `A escassez de semicondutores é resultado de uma
interrupção momentânea da produção, em especial no
sudeste asiático, devido à falta de matéria-prima, que é o
início da cadeia produtiva.` }
    ],
    correct: 'A',
    explanation: `O núcleo produtivo de semicondutores reúne economias asiáticas como Taiwan, Coreia do Sul e Cingapura, articuladas às cadeias industriais dos Tigres Asiáticos. A alternativa A identifica essa concentração regional, ainda que use sudeste asiático em sentido amplo.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias']
  },
  {
    id: 68,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A produção do vidro tem por base a modificação da estrutura
cristalina do quartzo (SiO₂) por meio do seu aquecimento e da
adição de óxidos alcalinos, dentre eles o Na₂O. Esse processo
adiciona cátions sódio à estrutura do quartzo, tornando-a
amorfa. Alguns vidros, como os utilizados em telas de
smartphones, passam ainda por processo de troca iônica para
aumentar a resistência a quedas e riscos. Para isso, o vidro é
banhado em uma solução salina contendo íons potássio.
Dessa forma, o potássio substitui o sódio na estrutura, sem
que o volume do vidro se altere.

Com base nessas informações, é correto afirmar que os íons
potássio`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q68_1.jpg","width":603,"height":254}],
    alternatives: [
      { id: 'A', type: 'text', value: `são maiores do que os íons sódio, dessa forma, a estrutura
torna-se mais preenchida e mais resistente ao choque
físico.` },
      { id: 'B', type: 'text', value: `são mais resistentes ao choque físico do que os íons sódio,
e esse caráter é conferido ao vidro.` },
      { id: 'C', type: 'text', value: `são menores do que os íons sódio, tornando a estrutura
menos preenchida e o vidro mais flexível.` },
      { id: 'D', type: 'text', value: `fazem com que a estrutura do vidro deixe de ser amorfa
quando substituem os íons sódio, tornando o vidro menos
resistente ao choque físico.` },
      { id: 'E', type: 'text', value: `têm o mesmo tamanho que os íons sódio, visto que ambos
são metais alcalinos, permitindo sua completa
substituição no vidro.` }
    ],
    correct: 'A',
    explanation: `O cátion K⁺ tem raio maior que o Na⁺. A substituição em um volume que não aumenta gera maior compactação e tensões compressivas na superfície, elevando a resistência mecânica do vidro.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 69,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Uma das formulações para os adesivos “silicones” usados na
construção civil é chamada de “silicone acético”. Essa
nomenclatura é utilizada porque o componente ativo libera
ácido acético durante a formação do precursor, espécie que
promoverá a polimerização, como representado
genericamente a seguir.

(R = cadeia orgânica)

Considerando essas informações, qual dos componentes
ativos a seguir faria com que a formulação fosse considerada
como “silicone acético”?`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q69_1.jpg","width":525,"height":178}],
    alternatives: [
      { id: 'A', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q69_altA.jpg` },
      { id: 'B', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q69_altB.jpg` },
      { id: 'C', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q69_altC.jpg` },
      { id: 'D', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q69_altD.jpg` },
      { id: 'E', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q69_altE.jpg` }
    ],
    correct: 'B',
    explanation: `O componente precisa possuir grupos acetato ligados ao silício, capazes de liberar ácido acético durante a hidrólise que forma o precursor da polimerização. A estrutura B apresenta esses grupos.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias']
  },
  {
    id: 70,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Oxigênio (O₂) e ozônio (O₃) estão em constante processo de
consumo e produção na estratosfera, como representado pelas
equações químicas a seguir. As reações I e II ilustram etapas da
produção de ozônio a partir de oxigênio, e a reação III mostra a
restauração de oxigênio a partir de ozônio.

Reação ΔH (kcal/mol de O₂)
I O₂ → 2 O . −118
II 2 O₂ + 2 O . → 2 O₃ ΔHII
III 2 O₃→ 3 O₂ +21

A reação global balanceada, composta pelas etapas I e II, que
representa a formação de ozônio é:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `3 O → O₃` },
      { id: 'B', type: 'text', value: `4 O₂ → 4 O₃` },
      { id: 'C', type: 'text', value: `2 O₃ → 3 O₂` },
      { id: 'D', type: 'text', value: `3 O₂ → 2 O₃` },
      { id: 'E', type: 'text', value: `3 O₃ → 2 O₂` }
    ],
    correct: 'D',
    explanation: `Somando I e II, os dois átomos de oxigênio produzidos em I são consumidos em II. O resultado é 3 O₂ → 2 O₃, que conserva seis átomos de oxigênio em cada lado.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 71,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Oxigênio (O₂) e ozônio (O₃) estão em constante processo de
consumo e produção na estratosfera, como representado pelas
equações químicas a seguir. As reações I e II ilustram etapas da
produção de ozônio a partir de oxigênio, e a reação III mostra a
restauração de oxigênio a partir de ozônio.

Reação ΔH (kcal/mol de O₂)
I O₂ → 2 O . −118
II 2 O₂ + 2 O . → 2 O₃ ΔHII
III 2 O₃→ 3 O₂ +21

O ΔHII, relacionado à reação II, pode ser calculado a partir dos
dados fornecidos para as reações I e III. O valor de ΔHII, em
kcal/mol de O₂ consumido, é igual a:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `−90,5` },
      { id: 'B', type: 'text', value: `−55,0` },
      { id: 'C', type: 'text', value: `+27,5` },
      { id: 'D', type: 'text', value: `+48,5` },
      { id: 'E', type: 'text', value: `+55,0` }
    ],
    correct: 'C',
    explanation: `Usam-se os valores e a unidade por mol de O₂ fornecidos na tabela. A reação global I + II é a inversa de III, com ΔH total = −3 × 21 = −63 kcal. Como I contribui com −118 kcal, II deve contribuir com +55 kcal para dois mols de O₂: ΔHII = 55/2 = +27,5 kcal/mol de O₂.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias']
  },
  {
    id: 72,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Alguns equipamentos de visão noturna têm seu
funcionamento baseado no efeito fotoelétrico, uma das
primeiras descobertas que contribuíram para o surgimento da
mecânica quântica. Nesses equipamentos, fótons de
frequência f emitidos por um objeto incidem sobre uma
superfície metálica. Elétrons são então liberados da superfície
e acelerados por um campo elétrico. Em seguida, o sinal
eletrônico é amplificado e produz uma imagem do objeto.

Diferentemente do que a física clássica prevê, apenas os
elétrons com energia hf acima de uma certa energia mínima
E0 são liberados da superfície metálica.

Considerando a incidência de fótons com frequência da
ordem de 10¹⁴ Hz, a ordem de grandeza do valor limite de E0
para que o equipamento funcione deve ser:

Note e adote:
Constante de Planck: h = 6,63 × 10⁻³⁴J.s`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `10⁻⁵⁰ J` },
      { id: 'B', type: 'text', value: `10⁻⁴⁰ J` },
      { id: 'C', type: 'text', value: `10⁻³⁰ J` },
      { id: 'D', type: 'text', value: `10⁻²⁰ J` },
      { id: 'E', type: 'text', value: `10⁻¹⁰ J` }
    ],
    correct: 'D',
    explanation: `A energia de cada fóton é hf ≈ 6,63 × 10⁻³⁴ × 10¹⁴ = 6,63 × 10⁻²⁰ J. Essa é a escala de energia disponível para vencer o limiar de emissão, correspondente à alternativa 10⁻²⁰ J.`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias']
  },
  {
    id: 73,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `As reações de hidrólise de ésteres, quando realizadas em meio
aquoso, podem ser catalisadas pela adição de ácido, sendo a
reação mais lenta em meios próximos da neutralidade.

(R = cadeia orgânica)

Duas reações idênticas para a hidrólise desse éster foram
realizadas nas mesmas condições, variando apenas o pH do
meio: uma delas foi conduzida em pH=2 e outra em pH=6. Qual
dos seguintes diagramas representa de forma mais adequada a
quantidade de ácido graxo formada em função do tempo de
reação para as hidrólises em pH=2 e pH=6?`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q73_1.jpg","width":532,"height":136}],
    alternatives: [
      { id: 'A', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q73_altA.jpg` },
      { id: 'B', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q73_altB.jpg` },
      { id: 'C', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q73_altC.jpg` },
      { id: 'D', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q73_altD.jpg` },
      { id: 'E', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q73_altE.jpg` }
    ],
    correct: 'A',
    explanation: `O meio mais ácido catalisa a hidrólise mais rapidamente. Em pH 2, o ácido graxo é formado mais depressa que em pH 6; a quantidade final é a mesma nas condições indicadas. O gráfico A representa essas curvas.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias']
  },
  {
    id: 74,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Cálculos renais, conhecidos popularmente por “pedras nos rins”,
consistem principalmente em oxalato de cálcio, CaC₂O₄, espécie
cuja constante de solubilidade (Kps) é de aproximadamente
2 × 10⁻⁹. Os íons oxalato, presentes em muitos vegetais, reagem
com os íons cálcio para formar oxalato de cálcio, que pode
gradualmente se acumular nos rins. Supondo que a concentração
de íons cálcio no plasma sanguíneo seja de cerca de
5 × 10⁻³ mol/L, qual seria a concentração mínima, em mol/L, de
íons oxalato para que CaC₂O₄ precipitasse?

Note e adote: Desconsidere a presença de quaisquer outros íons e considere que a concentração no plasma é determinante para a precipitação do oxalato.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `4 × 10⁻¹³` },
      { id: 'B', type: 'text', value: `10 × 10⁻¹²` },
      { id: 'C', type: 'text', value: `4 × 10⁻⁷` },
      { id: 'D', type: 'text', value: `2,5 × 10⁻⁶` },
      { id: 'E', type: 'text', value: `1 × 10⁻⁵` }
    ],
    correct: 'C',
    explanation: `A precipitação começa quando [Ca²⁺][C₂O₄²⁻] atinge Kps. Logo [C₂O₄²⁻] = 2 × 10⁻⁹/(5 × 10⁻³) = 4 × 10⁻⁷ mol/L.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias']
  },
  {
    id: 75,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Um marcador radioativo (24Na) foi injetado em um ponto de
um cano de água subterrâneo e, na sequência, com um
detector sobre o solo, foi medida a radioatividade ao longo do
percurso do cano. A figura a seguir esquematiza o local de
injeção do marcador e o perfil da radioatividade detectada ao
longo do cano.

Assinale a alternativa que melhor explica o perfil da
radioatividade.

Note e adote:
Tempo de meia-vida do 24Na = 15 horas.`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q75_1.jpg","width":497,"height":569}],
    alternatives: [
      { id: 'A', type: 'text', value: `No trecho 2 o cano está completamente entupido, por isso
a radioatividade diminui no trecho 3.` },
      { id: 'B', type: 'text', value: `No trecho 2 há uma fissura no cano, o que resulta em
acúmulo de marcador nesse trecho do solo.` },
      { id: 'C', type: 'text', value: `O marcador radioativo flui no sentido contrário ao fluxo da
água, acumulando-se no meio do cano.` },
      { id: 'D', type: 'text', value: `No trecho 3 a radioatividade é menor porque foi consumida por reações químicas ao longo do trecho 2.` },
      { id: 'E', type: 'text', value: `No trecho 2 a radioatividade diminui devido ao fato de a
meia-vida do marcador ser curta.` }
    ],
    correct: 'B',
    explanation: `O pico localizado de radioatividade indica acúmulo do marcador no solo ao redor do trecho 2, compatível com vazamento por uma fissura. O decaimento radioativo, sozinho, não produziria esse máximo espacial localizado.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 76,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O hidróxido de alumínio (Al(OH)₃), ao precipitar em solução
aquosa, forma um sólido gelatinoso que pode ser usado como
agente floculante no tratamento de água. Essa precipitação pode
ocorrer pela adição de um hidróxido solúvel a uma solução
aquosa ácida contendo um sal de alumínio solúvel, como o AlCl₃.
Entretanto, adicionando-se excesso de hidróxido ao meio, há a
formação de íons Al(OH)₄⁻, espécie solúvel em água, e o
precipitado se solubiliza novamente. Dessa forma, dependendo
do pH do meio, uma dentre as espécies Al(OH)₄⁻(aq), Al(OH)₃(s)
e Al³⁺(aq) estará presente na solução em quantidade maior que
as demais, como exemplificado no esquema.

A alternativa que mostra corretamente qual das espécies estará
em quantidade maior que as duas outras em cada faixa de pH é:`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q76_1.jpg","width":503,"height":100}],
    alternatives: [
      { id: 'A', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q76_altA.jpg` },
      { id: 'B', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q76_altB.jpg` },
      { id: 'C', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q76_altC.jpg` },
      { id: 'D', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q76_altD.jpg` },
      { id: 'E', type: 'image', value: `/fuvest/2022/images/fuvest_2022_q76_altE.jpg` }
    ],
    correct: 'E',
    explanation: `Em meio ácido predomina Al³⁺ solúvel. Com aumento do pH, precipita Al(OH)₃. Em excesso de base, o hidróxido anfótero se dissolve formando Al(OH)₄⁻. A sequência das faixas de pH é a mostrada em E.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias']
  },
  {
    id: 77,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Para o monitoramento ambiental no entorno de um posto de
gasolina, coletou-se uma amostra de solo que foi submetida de
forma integral à análise de naftaleno, um composto presente na
gasolina. A concentração encontrada foi de 2,0 mg de naftaleno
por kg de solo úmido. Sabendo que essa amostra de solo contém
20% de água, qual é o resultado dessa análise por kg de solo seco?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `0,4 mg/kg` },
      { id: 'B', type: 'text', value: `1,6 mg/kg` },
      { id: 'C', type: 'text', value: `2,0 mg/kg` },
      { id: 'D', type: 'text', value: `2,2 mg/kg` },
      { id: 'E', type: 'text', value: `2,5 mg/kg` }
    ],
    correct: 'E',
    explanation: `Um quilograma de solo úmido contém 0,8 kg de solo seco e 2 mg de naftaleno. A concentração por massa seca é 2/0,8 = 2,5 mg/kg.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 78,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O cátion Ba²⁺ pode apresentar toxicidade aos humanos,
dependendo de sua concentração e forma química. Por exemplo,
BaSO₄ é pouco tóxico, sendo usado como contraste radiológico,
por ser insolúvel em solução aquosa, enquanto BaCO₃ e Ba(NO₃)2
são muito tóxicos, pois liberam Ba²⁺ no organismo. Em um
laboratório foram feitos dois testes de solubilidade para
identificar o conteúdo de três frascos não rotulados que
poderiam ser de Ba(NO₃)2, BaCO₃ ou BaSO₄. Os resultados dos
dois testes de solubilidade são apresentados a seguir.

Teste I — Adição de H₂O destilada à temperatura ambiente.
Teste II — Adição de HCl diluído à temperatura ambiente.
Frasco 1: insolúvel, sem liberação de gás nos dois testes.
Frasco 2: insolúvel, sem liberação de gás em I; solúvel, com liberação de gás incolor em II.
Frasco 3: solúvel, sem liberação de gás nos dois testes.

Considerando os ensaios realizados, indique quais são os compostos contidos nos frascos 1, 2 e 3, respectivamente.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `BaSO₄; BaCO₃; Ba(NO₃)₂.` },
      { id: 'B', type: 'text', value: `BaCO₃; BaSO₄; Ba(NO₃)₂.` },
      { id: 'C', type: 'text', value: `Ba(NO₃)₂; BaCO₃; BaSO₄.` },
      { id: 'D', type: 'text', value: `BaSO₄; Ba(NO₃)₂; BaCO₃.` },
      { id: 'E', type: 'text', value: `BaCO₃; Ba(NO₃)₂; BaSO₄.` }
    ],
    correct: 'A',
    explanation: `BaSO₄ é insolúvel em água e em HCl diluído: frasco 1. BaCO₃ é insolúvel em água, mas reage com ácido liberando CO₂: frasco 2. Ba(NO₃)₂ é solúvel em água: frasco 3.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 79,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Ao opor operários sob vigilância e operários a domicílio, a
fábrica reduziu os seus custos sem se ver necessariamente
obrigada a adotar uma tecnologia mais eficaz. O argumento
da superioridade tecnológica não é, portanto, nem necessário
nem suficiente para explicar o advento e o êxito da fábrica.

Stephen Marglin. “Origens e funções do parcelamento das tarefas”. Revista
de Administração de Empresas, v.18, nº4. Rio de Janeiro, 1978, p.14.
Adaptado.

De acordo com o economista norte-americano, o triunfo da
organização econômica fabril deve ser compreendido`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `por meio do maciço investimento na tecnologia das
grandes máquinas, diminuindo os custos da produção.` },
      { id: 'B', type: 'text', value: `pela capacidade de controlar e padronizar as diferentes
etapas do processo produtivo por meio da disciplina.` },
      { id: 'C', type: 'text', value: `pelo processo de concentração de operários, que
estimulou a disputa por vagas e a diminuição dos salários.` },
      { id: 'D', type: 'text', value: `através da substituição das formas artesanais das oficinas
domésticas pela estrutura de guildas e corporações.` },
      { id: 'E', type: 'text', value: `por meio de estratégias de gestão que incidiam na divisão
do trabalho e na introdução de bônus por produtividade.` }
    ],
    correct: 'B',
    explanation: `Marglin destaca o controle sobre os trabalhadores e a padronização das etapas pela disciplina fabril. A superioridade técnica, por si, não é condição necessária nem suficiente para explicar o êxito da fábrica.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias']
  },
  {
    id: 80,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Cândido Portinari. “Os retirantes” (1944). In: Marília Balbi. Portinari: pintor do
Brasil. São Paulo: Boitempo, 2003, p. 142.

Identifique a alternativa mais adequada para expressar as
relações entre arte e sociedade no quadro:`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q80_1.jpg","width":595,"height":632}],
    alternatives: [
      { id: 'A', type: 'text', value: `A obra retrata o êxodo rural de um grupo de nordestinos,
fugindo da fome, da seca e da miséria.` },
      { id: 'B', type: 'text', value: `O quadro critica a incapacidade da SUDENE em propor
políticas públicas para a população nordestina.` },
      { id: 'C', type: 'text', value: `A pintura veicula uma mensagem de esperança, ao opor o céu
azul aos tons terrosos para designar a aridez da paisagem.` },
      { id: 'D', type: 'text', value: `A imagem do grupo com corpos esquálidos e doentes
evidencia uma visão preconceituosa sobre os nordestinos.` },
      { id: 'E', type: 'text', value: `A tela expressa fortes convicções religiosas, ao retratar o
calvário dos nordestinos como uma passagem bíblica.` }
    ],
    correct: 'A',
    explanation: `Os retirantes retrata a migração de uma família nordestina atingida pela seca, fome e pobreza. A obra articula linguagem artística e denúncia das condições sociais que impulsionam o êxodo rural.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias']
  },
  {
    id: 81,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Antônio Vicente Mendes Maciel, Conselheiro de
alcunha, (...) era cearense e nasceu (...) a 13 de março de 1830.
(...) Aprendeu a ler, escrever e contar. (...) Andou estudando
latim, enxertando frases da língua de Horácio nos seus longos
"conselhos", geralmente baseados na Bíblia sagrada, que
conhecia razoavelmente. (...) Era apenas um peregrino,
acompanhado de numeroso séquito; pequenos agricultores,
negros 13 de Maio, caboclos de aldeamentos, gente sem
recursos, doentes. (...)
Em 1893 (...) Antônio Vicente se estabeleceu em
Canudos (...). Rebatizou a localidade, dando-lhe o nome de
Belo Monte. Criou um clima de tranquilidade local.
Respeitavam-no. Seu monarquismo era utopia.
De vários pontos do sertão apareciam os
conselheiristas (...). Caminhavam para lá movidos pela fé.
Queriam morar ali, sem pensar em conquistar novas terras.
Nem restaurar a monarquia. Cá de fora, não entenderam
assim. Interesses políticos e patrimoniais deram novos rumos
e destino sangrento ao sertão do Conselheiro. (...)

José Calazans. “O Bom Jesus do sertão”. Caderno Mais, Folha de S. Paulo.
São Paulo, 21/09/1997.
O texto sugere que Antonio Conselheiro`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `representou a luta da Igreja Católica contra o regime
republicano recém-instaurado no Brasil.` },
      { id: 'B', type: 'text', value: `fez uso da sua educação formal para colocar em xeque os
dogmas do catolicismo no Brasil.` },
      { id: 'C', type: 'text', value: `defendeu a restauração da Monarquia por identificar-se
com os interesses políticos e patrimoniais das elites locais.` },
      { id: 'D', type: 'text', value: `atraiu pessoas pobres do sertão nordestino com
mensagens de fé e de acolhimento na comunidade.` },
      { id: 'E', type: 'text', value: `liderou uma insurreição contra as estruturas sociais e
políticas implementadas pela República.` }
    ],
    correct: 'D',
    explanation: `O texto apresenta Conselheiro como liderança religiosa que acolheu pobres e desamparados do sertão. A adesão à comunidade de Belo Monte decorreu da fé e da busca por condições de vida, não de um plano de restaurar a monarquia.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias']
  },
  {
    id: 82,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Se vamos à essência da nossa formação, veremos que na
realidade nos constituímos para fornecer açúcar, tabaco,
alguns outros gêneros; mais tarde ouro e diamantes; depois,
algodão, e em seguida café, para o comércio europeu.

Caio Prado Jr. Formação do Brasil Contemporâneo. São Paulo: Companhia
das Letras, 2011, p. 29.

Sobre o sentido da colonização do Brasil, é correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Permitiu o desenvolvimento de um extenso parque
industrial.` },
      { id: 'B', type: 'text', value: `Caracterizou-se pela forte presença da mão de obra
assalariada.` },
      { id: 'C', type: 'text', value: `Esteve voltado, principalmente, para o mercado externo.` },
      { id: 'D', type: 'text', value: `Baseou-se na produção de manufaturas têxteis ou alimentares.` },
      { id: 'E', type: 'text', value: `Garantiu a expansão da pequena propriedade agrícola.` }
    ],
    correct: 'C',
    explanation: `Para Caio Prado Jr., a colonização se estruturou para fornecer produtos ao comércio europeu. Seu sentido econômico foi predominantemente externo, organizando atividades e trabalho em função desse mercado.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias']
  },
  {
    id: 83,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A revolta dos Malês, ocorrida em Salvador em 1835,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `foi uma revolta organizada por escravizados e libertos,
contra a escravidão e a imposição da religião católica.` },
      { id: 'B', type: 'text', value: `expressava as aspirações de liberdade dos escravos
urbanos impedidos de comprar as suas cartas de alforria.` },
      { id: 'C', type: 'text', value: `externava a indignação da população urbana branca com
as práticas da violência e dos castigos públicos.` },
      { id: 'D', type: 'text', value: `reivindicava mais autonomia para as províncias,
contrapondo-se à política centralizadora empregada pelos
gestores imperiais.` },
      { id: 'E', type: 'text', value: `fracassou em decorrência das dificuldades encontradas na
arregimentação de escravos dos engenhos do Recôncavo.` }
    ],
    correct: 'A',
    explanation: `A Revolta dos Malês foi protagonizada por africanos escravizados e libertos, muitos muçulmanos. A insurreição se voltou contra a escravidão e a imposição religiosa na sociedade de Salvador.`,
    subject: ['his'],
    topics: ['Brasil Império', 'Questões aleatórias']
  },
  {
    id: 84,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A respeito da Guerra do Peloponeso no séc. V a.C., é correto
afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `O conflito resultou das disputas comerciais e militares
entre a Liga de Delos, liderada pela cidade-estado de
Atenas, e os interesses assírios.` },
      { id: 'B', type: 'text', value: `A guerra afetou a autonomia política e administrativa das
cidades-estados, dando lugar à organização imperial.` },
      { id: 'C', type: 'text', value: `A hegemonia ateniense foi dissolvida com o triunfo da Liga
do Peloponeso e as colônias na Ásia Menor foram
devolvidas aos persas.` },
      { id: 'D', type: 'text', value: `A guerra marcou a decadência do militarismo espartano
frente aos exércitos atenienses, que defendiam a
democracia.` },
      { id: 'E', type: 'text', value: `O desabastecimento de escravos e a desorganização da
produção agrícola contribuíram para a perda da
hegemonia grega no Mediterrâneo.` }
    ],
    correct: 'C',
    explanation: `A derrota ateniense na Guerra do Peloponeso encerrou sua hegemonia e favoreceu a Liga do Peloponeso. Os desdobramentos do conflito também restauraram a influência persa sobre cidades gregas da Ásia Menor.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias']
  },
  {
    id: 85,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Leonardo da Vinci: Leben und Werk. Stuttgart, Zürich: Belser Verlag, 1989, p. 171.

O “Homem Vitruviano” foi desenhado por Leonardo da Vinci
(1452-1519) com base em um tratado sobre Arquitetura
escrito e ilustrado por Marcus Vitruvius no século I a.C., na
Roma Antiga. A obra ganhou versões impressas e traduções
nos séculos XV e XVI.

O desenho de Da Vinci expressa propostas do movimento
Renascentista ao`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q85_1.jpg","width":458,"height":639}],
    alternatives: [
      { id: 'A', type: 'text', value: `buscar perpetuar obras da Antiguidade Clássica por meio
da cópia e da salvaguarda.` },
      { id: 'B', type: 'text', value: `censurar os estudos da anatomia humana herdados da
Antiguidade Clássica.` },
      { id: 'C', type: 'text', value: `retomar a percepção da simetria e das proporções
humanas como ideal do Belo.` },
      { id: 'D', type: 'text', value: `apoiar-se no legado da Antiguidade greco-romana para
reafirmar o teocentrismo.` },
      { id: 'E', type: 'text', value: `separar a arte do pensamento humanista e do
conhecimento matemático.` }
    ],
    correct: 'C',
    explanation: `O desenho retoma a Antiguidade clássica e relaciona beleza a simetria e proporções do corpo humano. Essa valorização do homem e da medida é característica do Renascimento.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias']
  },
  {
    id: 86,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `A noção de ditadura variou ao longo da História e dependeu das
características políticas de cada sociedade.

A esse respeito, assinale a alternativa correta:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Na Roma Antiga, durante o período republicano, a
ditadura era uma magistratura de caráter extraordinário,
delimitada legalmente e estabelecida por um período
determinado, com uma finalidade definida.` },
      { id: 'B', type: 'text', value: `Com o golpe do 18 Brumário (1799), instaurou-se uma
ditadura parlamentar na França, sob o comando de
Napoleão Bonaparte, cujo objetivo fundamental era
reescrever a Constituição francesa.` },
      { id: 'C', type: 'text', value: `A ditadura militar brasileira, estabelecida em 1964, teve
como característica o poder exclusivo das Forças Armadas
e o fechamento das instâncias parlamentares durante
toda a sua vigência.` },
      { id: 'D', type: 'text', value: `O conceito da ditadura do proletariado foi elaborado por
Karl Marx, defendido por anarquistas e comunistas, e
previa a instauração permanente de um regime
autoritário, como o da antiga União Soviética.` },
      { id: 'E', type: 'text', value: `A ditadura nazista caracterizava-se por um complexo
arranjo institucional baseado na articulação política entre
o Poder Executivo, as Forças Armadas, o Parlamento
alemão e os poderes legislativos municipais.` }
    ],
    correct: 'A',
    explanation: `Na República romana, o ditador era nomeado em circunstâncias extraordinárias, com atribuição específica e duração limitada. Isso distingue a magistratura antiga das ditaduras modernas de duração indeterminada.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias']
  },
  {
    id: 87,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Martín Fierro acredita na importância da contribuição
intelectual da América, prévia tesourada a todo cordão
umbilical. Acentuar e generalizar para as demais
manifestações intelectuais o movimento de independência
iniciado, no idioma, por Ruben Darío, não significa,
entretanto, que haveremos de renunciar, nem muito menos
que finjamos desconhecer que todas as manhãs nos servimos
de um creme dental sueco, de umas toalhas francesas e de um
sabonete inglês.
Martín Fierro tem fé em nossa fonética, em nossa visão,
em nossas maneiras, em nosso ouvido, em nossa capacidade
digestiva e de assimilação.

“Manifesto Martín Fierro”, de Oliverio Girondo, 15/5/1924. In: Jorge
Schwartz, Vanguardas latino-americanas: polêmicas, manifestos e textos
críticos. São Paulo: EDUSP; Iluminuras; FAPESP, 1995, p. 116.

A revista de vanguarda literária Martín Fierro foi fundada em
Buenos Aires, na Argentina, em 1924. O “Manifesto”,
publicado no seu nº 4, apresentava sintonias com o
movimento modernista paulistano, ao`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `propor a ruptura com tradições estéticas e valorizar a
autonomia criativa local, sem desprezar os intercâmbios
com a Europa.` },
      { id: 'B', type: 'text', value: `defender a obediência aos modelos artísticos da França e
da Inglaterra, reconhecendo sua contribuição intelectual.` },
      { id: 'C', type: 'text', value: `repudiar o movimento de independência iniciado, na
língua espanhola, pelo poeta nicaraguense Ruben Darío.` },
      { id: 'D', type: 'text', value: `buscar inspiração nos modos de expressão popular e
artística originários da América e revolucionar os hábitos
de consumo.` },
      { id: 'E', type: 'text', value: `condenar a inquietação intelectual e a experimentação
literária em favor da cultura de massas e do conformismo.` }
    ],
    correct: 'A',
    explanation: `O manifesto defende autonomia e inovação locais sem exigir isolamento cultural. A capacidade de assimilar contribuições externas aproxima a vanguarda argentina das propostas modernistas brasileiras.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias']
  },
  {
    id: 88,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `Robert Capa. Omaha Beach, 6 de junho de 1944. In: Robert Capa. São Paulo, Cosac
Naify, 2012; foto 39.

Yevgeny Khaldei. Berlim, maio de 1945. In: Letícia Yazbek, Aventuras da História.
Disponível em https://aventurasnahistoria.uol.com.br/noticias/historia-hoje/.

As fotos de Robert Capa e de Yevgeny Khaldei foram produzidas
para documentar eventos da Segunda Guerra Mundial. Referem-se, respectivamente,`,
    images: [{"src":"/fuvest/2022/images/fuvest_2022_q88_1.jpg","width":554,"height":378},{"src":"/fuvest/2022/images/fuvest_2022_q88_2.jpg","width":554,"height":357}],
    alternatives: [
      { id: 'A', type: 'text', value: `ao desembarque dos Aliados para libertar a França da
ocupação nazista e ao avanço decisivo das forças Aliadas
frente à Alemanha.` },
      { id: 'B', type: 'text', value: `aos conflitos no Canal da Mancha, que deram início à Primeira
Guerra Mundial, e à tomada de Berlim pelas tropas soviéticas.` },
      { id: 'C', type: 'text', value: `à fuga de membros da Resistência francesa para a Inglaterra
após a invasão nazista e ao início da construção do Muro de
Berlim.` },
      { id: 'D', type: 'text', value: `às batalhas no Mediterrâneo, que deram início à Segunda
Guerra Mundial, e à incorporação da Alemanha à “cortina de
ferro”.` },
      { id: 'E', type: 'text', value: `ao confronto entre a República de Vichy e a Resistência
francesa e à vitória da União Soviética sobre os Aliados.` }
    ],
    correct: 'A',
    explanation: `A foto de Capa registra o desembarque aliado na Normandia em junho de 1944. A de Khaldei registra a tomada de Berlim em maio de 1945, etapa decisiva da derrota da Alemanha nazista.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias']
  },
  {
    id: 89,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `No cerne da ideologia Bannon há uma série de contrastes
extraordinariamente simplificadores entre bom e mau,
sagrado e profano. Essa série semiótica cria perigosos outros,
cuja existência contínua ameaça a boa gente que constitui o
que Bannon descreve como a “verdadeira América”(...). Numa
ordem social democrática, o conflito entre oponentes
partidários é agonístico, não antagonístico. Bannon vê de
outra forma. Não há espaço para a cortesia em seu universo
(...).

Jeffrey Alexander. “Vociferando contra o iluminismo: A ideologia de Steve
Bannon”. Sociologia & Antropologia, vol. 08, n. 3, set-dez, 2018.
O antagonismo é a luta entre inimigos, enquanto o agonismo
representa a luta entre adversários. (...) o propósito da política
democrática é transformar antagonismo em agonismo. Isso
demanda oferecer canais por meio dos quais às paixões coletivas
serão dados mecanismos de expressarem-se sobre questões que,
ainda que permitindo possibilidade suficiente de identificação,
não construirão o opositor como inimigo, mas como adversário.

Chantal Mouffe. “Por um modelo agonístico de democracia”. Revista de
Sociologia e Política, Curitiba, n. 25, nov. 2005, p. 11-23.

A primeira citação foi retirada de um texto em que o sociólogo
Jeffrey Alexander desenvolve o que compreende ser a
ideologia de Steve Bannon, assessor do ex-presidente norte-americano Donald Trump. A segunda citação foi extraída de
um artigo em que a cientista política Chantal Mouffe
desenvolve a noção de “pluralismo agonístico”. A partir da
perspectiva apresentada nas citações, é correto afirmar que a
ideologia de Steve Bannon`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `defende uma ordem social agonística baseada na divisão
entre grupos e nos conflitos entre inimigos políticos.` },
      { id: 'B', type: 'text', value: `sustenta uma ordem social baseada em consensos e que
não admite conflitos entre adversários.` },
      { id: 'C', type: 'text', value: `defende a possibilidade de conflitos entre adversários,
mas não admite a lógica antagonística da aniquilação e
exclusão do inimigo.` },
      { id: 'D', type: 'text', value: `defende uma ordem social dividida entre bom e mau e que
transforma o antagonismo em agonismo.` },
      { id: 'E', type: 'text', value: `sustenta uma ordem social antagonística fundada na
divisão da sociedade entre lados opostos que devem ser
entendidos como inimigos.` }
    ],
    correct: 'E',
    explanation: `Segundo as citações, Bannon apresenta o outro como inimigo e ameaça existencial. Isso caracteriza antagonismo, ao contrário do agonismo democrático, que reconhece o opositor como adversário legítimo.`,
    subject: ['fil'],
    topics: ['Política', 'Questões aleatórias']
  },
  {
    id: 90,
    exam: 'fuvest',
    year: 2022,
    phase: 1,
    text: `O IPHAN - Instituto do Patrimônio Histórico e Artístico
Nacional e a Prefeitura da Cidade do Rio de Janeiro envidaram
esforços no sentido de deixar exposta para a contemplação da
população parte do Sítio Arqueológico do Cais do Valongo,
com o objetivo de apresentar ao visitante, através daquele
pequeno, mas representativo espaço, a materialização do
momento mais trágico da nossa história, fazendo com que ele
não seja esquecido. (...)
A história do Cais do Valongo e do seu entorno está
indissoluvelmente ligada à história universal, por ter sido a
porta de entrada do maior volume de africanos escravizados
nas Américas. O Rio de Janeiro era, então, a mais afro-atlântica das cidades costeiras do território brasileiro (...).
Disponível em http://portal.iphan.gov.br/.

O texto integra a proposta elaborada pelo IPHAN, em 2016,
para inscrição do Sítio Arqueológico do Cais do Valongo na
lista do Patrimônio Mundial. Com base no documento, a
história do Cais do Valongo se entrelaça à história universal,
pois se relaciona ao`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `tráfico de africanos escravizados para a América de
colonização portuguesa.` },
      { id: 'B', type: 'text', value: `Rio de Janeiro como única cidade escravista das Américas
na época colonial.` },
      { id: 'C', type: 'text', value: `trabalho de escavação realizado por arqueólogos
estrangeiros no passado.` },
      { id: 'D', type: 'text', value: `fluxo de escravizados do Brasil para outras partes das
Américas, após as independências.` },
      { id: 'E', type: 'text', value: `esforço do IPHAN para silenciar a história da escravidão no
mundo atlântico.` }
    ],
    correct: 'A',
    explanation: `O Cais do Valongo foi uma grande porta de entrada de africanos escravizados no Brasil. Sua história local materializa a dimensão transatlântica do tráfico e da colonização portuguesa nas Américas.`,
    subject: ['his'],
    topics: ['Brasil Império', 'Questões aleatórias']
  }
];

export default fuvest_2022;