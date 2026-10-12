import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2023_D2: QuizQuestion[] = [
  {
    id: 91,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O número de abelhas encontra-se em declínio em 
várias regiões do mundo, inclusive no Brasil, sendo 
que vários fatores contribuem para o colapso de suas 
colmeias. Nos Estados Unidos, bombas de sementes 
de espécies vegetais nativas têm sido utilizadas para 
combater o desaparecimento desses insetos. Elas são 
pequenas bolinhas recheadas com sementes, adubo e 
argila. Quando são arremessadas e ficam expostas ao 
sol e à chuva, germinam até mesmo em solo pouco fértil. 
DARAYA, V. Disponível em: http://planetasustentavel.abril.com.br. 
Acesso em: 2 fev. 2015 (adaptado). 
Esse método contribui para a preservação das abelhas 
porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `reduz sua predação.` },
      { id: 'B', type: 'text', value: `reduz o uso de pesticidas.` },
      { id: 'C', type: 'text', value: `reduz a competição por abrigo.` },
      { id: 'D', type: 'text', value: `aumenta a oferta de alimento.` },
      { id: 'E', type: 'text', value: `aumenta os locais de reprodução.` },
    ],
    correct: 'D',
    explanation: `O uso de espécies nativas permite a disponibilidade de flores que fornecerão alimento às abelhas.`,
    subject: ['bio'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 92,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Os mais antigos cozinhavam o feijão na panela de ferro a 
fim de acabar com a palidez de seus filhos. Alguns chegavam 
até a colocar um prego enferrujado nesse cozimento para 
liberar o ferro contido nele. Sabe-se que esse elemento 
pode ser encontrado na sua forma metálica ou iônica, 
sendo essencial para a manutenção da vida humana. 
As estratégias citadas eram utilizadas com o objetivo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `tratar a diarreia.` },
      { id: 'B', type: 'text', value: `prevenir a anemia.` },
      { id: 'C', type: 'text', value: `evitar as verminoses.` },
      { id: 'D', type: 'text', value: `remediar o raquitismo.` },
      { id: 'E', type: 'text', value: `combater a febre amarela.` },
    ],
    correct: 'B',
    explanation: `O aumento da ingestão de ferro permite maior produção de hemoglobina, combatendo desta forma a anemia ferropriva.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 93,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A utilização de tecnologia nuclear é um tema 
bastante controverso, por causa do risco de acidentes 
graves, como aqueles ocorridos em Chernobyl (1986), 
em Goiânia (1987) e em Fukushima (2011). Apesar de 
muitas desvantagens, como a geração de resíduos 
tóxicos, a descontaminação ambiental dispendiosa em 
caso de acidentes e a utilização em armas nucleares, 
a geração de energia nuclear apresenta vantagens em 
comparação a outras fontes de energia. 
A geração dessa energia tem como característica:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Formar resíduos facilmente recicláveis.` },
      { id: 'B', type: 'text', value: `Promover o aumento do desmatamento.` },
      { id: 'C', type: 'text', value: `Contribuir para a produção de chuva ácida.` },
      { id: 'D', type: 'text', value: `Emitir gases tóxicos que são lançados no ambiente.` },
      { id: 'E', type: 'text', value: `Produzir calor sem o consumo de combustíveis fósseis.` },
    ],
    correct: 'E',
    explanation: `Usinas termonucleares não utilizam combustíveis fósseis no processo de geração de energia, mas sim pastilhas contendo elementos radioativos utilizados no processo de fissão nuclear.`,
    subject: ['fis'],
    topics: ['Física moderna', 'Questões aleatórias'],
  },
  {
    id: 94,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Em uma indústria, o controle da dureza da água é 
importante quando ela é utilizada em caldeiras, uma vez 
que sais pouco solúveis, formados a partir de sulfatos e 
carbonatos, podem acumular-se no interior das tubulações, 
causando obstruções. Para avaliar a água utilizada nessa 
indústria, foram realizados testes de qualidade que 
consideraram os seguintes parâmetros: 
 
Qual teste deve ser considerado para controlar a 
formação desse tipo de obstrução de tubulações?`,
    images: ['/enem/2023/images/enem_2023_d2_q94.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `2` },
      { id: 'C', type: 'text', value: `3` },
      { id: 'D', type: 'text', value: `4` },
      { id: 'E', type: 'text', value: `5` },
    ],
    correct: 'A',
    explanation: `De acordo com o texto, a formação de sais pouco solúveis de carbonatos e sulfatos podem acumular-se nas tubulações, levando a sua obstrução. O parâmetro que está relacionado a formação de sais com esses ânions é o cálcio, pela formação dos sais carbonato de cálcio e sulfato de cálcio.`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 95,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `As aves apresentam dois tipos de músculos em seus 
corpos: vermelhos e brancos. Aves migratórias como garças, 
gansos e patos selvagens têm os músculos vermelhos bem 
desenvolvidos, com ampla rede de vasos sanguíneos. 
Nas viagens por grandes distâncias, tais músculos são 
fundamentais, pois favorecem o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `execução de manobras.` },
      { id: 'B', type: 'text', value: `metabolismo corpóreo elevado.` },
      { id: 'C', type: 'text', value: `manutenção da aerodinâmica.` },
      { id: 'D', type: 'text', value: `deslocamento a grandes velocidades.` },
      { id: 'E', type: 'text', value: `capacidade de voo em grandes altitudes.` },
    ],
    correct: 'B',
    explanation: `A maior quantidade de músculos vermelhos (maior irrigação sanguínea, mais mioglobina e mais mitocôndrias) permite maior atividade aeróbica em suas células musculares e, consequentemente, maior metabolismo.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 96,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Existe no comércio um produto antimofo constituído por 
uma embalagem com tampa perfurada contendo cloreto 
de cálcio anidro, CaCl 2 . Uma vez aberto o lacre, essa 
substância absorve a umidade ambiente, transformando-se 
em cloreto de cálcio di-hidratado, CaCl 2 ⋅ 2H 2 O. 
Considere a massa molar da água igual a 18 g mol −1 , e a 
massa molar do cloreto de cálcio anidro igual a 111 g mol −1 . 
Na hidratação da substância presente no antimofo, o 
ganho percentual, em massa, é mais próximo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `14%` },
      { id: 'B', type: 'text', value: `16%` },
      { id: 'C', type: 'text', value: `24%` },
      { id: 'D', type: 'text', value: `32%` },
      { id: 'E', type: 'text', value: `75%` },
    ],
    correct: 'D',
    explanation: `Observe que a massa do CaCl 2 anidro, ou seja, sem água, é 111g/mol. O composto hidratado contém duas moléculas de água, ou seja, 36g a mais por mol, considerando que 1 mol de H₂ O tem 18 g. Consideramos, então que: 111 g ——— 100% 36 ————— x x = 3600 / 11 x = 32,4%`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 97,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um garoto comprou vários abacates na feira, mas 
descobriu que eles não estavam maduros o suficiente 
para serem consumidos. Sua mãe recomendou que 
ele colocasse os abacates em um recipiente fechado, 
pois isso aceleraria seu amadurecimento. Com certa 
dúvida, o garoto realizou esta experiência: colocou 
alguns abacates no recipiente e deixou os demais em 
uma fruteira aberta. Surpreendendo-se, ele percebeu 
que os frutos que estavam no recipiente fechado 
amadureceram mais rapidamente. 
A aceleração desse processo é causada por`,
    alternatives: [
      { id: 'A', type: 'text', value: `acúmulo de gás etileno.` },
      { id: 'B', type: 'text', value: `redução da umidade do ar.` },
      { id: 'C', type: 'text', value: `aumento da concentração de CO 2 .` },
      { id: 'D', type: 'text', value: `diminuição da intensidade luminosa.` },
      { id: 'E', type: 'text', value: `isolamento do contato com O 2 atmosférico.` },
    ],
    correct: 'A',
    explanation: `O etileno é um fitormônio gasoso cujo aumento da concentração promove a maturação dos frutos.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 98,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Há muito tempo são conhecidas espécies de 
lesmas-do-mar com uma capacidade ímpar: guardar 
parte da maquinaria das células das algas que 
consomem - os cloroplastos - e mantê-los funcionais 
dentro das suas próprias células, obtendo assim 
parte do seu alimento. Investigadores portugueses 
descobriram que essas lesmas-do-mar podem ser 
mais eficientes nesse processo do que as próprias 
algas que consomem. 
Disponível em: www.cienciahoje.pt. Acesso em: 10 fev. 2015 (adaptado). 
Essa adaptação confere a esse organismo a capacidade 
de obter primariamente`,
    alternatives: [
      { id: 'A', type: 'text', value: `ácidos nucleicos.` },
      { id: 'B', type: 'text', value: `carboidratos.` },
      { id: 'C', type: 'text', value: `proteínas.` },
      { id: 'D', type: 'text', value: `vitaminas.` },
      { id: 'E', type: 'text', value: `lipídios.` },
    ],
    correct: 'B',
    explanation: `Os cloroplastos originados das algas realizam a fotossíntese produzindo primariamente carboidratos como a glicose.`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 99,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A leishmaniose visceral é uma zoonose causada por 
um protozoário do gênero Leishmânia que é encontrado em 
diversos tecidos. Ela é transmitida ao homem de forma 
indireta, por vetores do ambiente doméstico. O cão é 
considerado um importante hospedeiro desse protozoário, 
podendo ou não apresentar os sintomas da doença, como 
perda de peso, anemia, ferimentos na pele, diarreia, 
conjuntivite e insuficiência renal. Em uma região que 
sofre com alta incidência dessa doença, uma campanha 
do centro de zoonoses buscou verificar a presença desse 
protozoário nos cães para tentar controlar a doença. 
Em qual material biológico dos cães a presença desse 
protozoário representa risco de transmissão dessa zoonose?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Urina.` },
      { id: 'B', type: 'text', value: `Saliva.` },
      { id: 'C', type: 'text', value: `Fezes.` },
      { id: 'D', type: 'text', value: `Sangue.` },
      { id: 'E', type: 'text', value: `Secreção ocular.` },
    ],
    correct: 'D',
    explanation: `O protozoário Leishmânia é transportado na corrente sanguínea do animal buscando órgãos internos onde se estabelece para a reprodução.`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 100,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um professor lança uma esfera verticalmente para 
cima, a qual retorna, depois de alguns segundos, ao ponto 
de lançamento. Em seguida, lista em um quadro todas as 
possibilidades para as grandezas cinemáticas. 
 
*Grandezas com módulo nulo não têm sentido definido. 
Ele solicita aos alunos que analisem as grandezas 
cinemáticas no instante em que a esfera atinge a altura 
máxima, escolhendo uma combinação para os módulos 
e sentidos da velocidade e da aceleração. 
A escolha que corresponde à combinação correta é`,
    images: ['/enem/2023/images/enem_2023_d2_q100.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `v = 0 e a ≠ 0 para cima.` },
      { id: 'B', type: 'text', value: `v ≠ 0 para cima e a = 0.` },
      { id: 'C', type: 'text', value: `v = 0 e a ≠ 0 para baixo.` },
      { id: 'D', type: 'text', value: `v ≠ 0 para cima e a ≠ 0 para cima.` },
      { id: 'E', type: 'text', value: `v ≠ 0 para baixo e a ≠ 0 para baixo.` },
    ],
    correct: 'C',
    explanation: `Neste tipo de lançamento o corpo parte com velocidade inicial na vertical e conforme vai subindo vai perdendo velocidade, por conta da gravidade (aceleração constante voltado para baixo). Ao chegar na altura máxima (ponto de inversão do movimento) o corpo para (v = 0) e então começa a cair.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 101,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Muitas mulheres sofrem com desconfortos nos dias 
que antecedem a menstruação, a chamada tensão 
pré-menstrual. Entre outros sintomas, podem ocorrer 
alterações de humor. Atualmente, acredita-se que os 
sintomas são resultado da queda na concentração do 
neurotransmissor serotonina, que, por sua vez, está 
relacionado com a diminuição na produção dos hormônios 
ovarianos estrógeno e progesterona, observada nessa 
fase do ciclo feminino. 
DIMMOCK, P. W. et al. Efficacy of Selective Serotonin-Reuptake Inhibitors in Premenstrual 
Syndrome: a Systematic Review. The Lancet , n. 9 236, 2000 (adaptado). 
A redução da produção desses hormônios nessa fase 
está relacionada com o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `regressão do corpo lúteo ovariano.` },
      { id: 'B', type: 'text', value: `diminuição na produção de ocitocina.` },
      { id: 'C', type: 'text', value: `liberação do gameta feminino na ovulação.` },
      { id: 'D', type: 'text', value: `aumento nos níveis dos hormônios LH e FSH.` },
      { id: 'E', type: 'text', value: `elevação nos níveis sorológicos de adrenalina.` },
    ],
    correct: 'A',
    explanation: `A queda dos hormônios estrogênio e progesterona é desencadeada pela degeneração de sua estrutura produtora &#8211; o corpo amarelo ou lúteo.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 102,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `As cetonas fazem parte de famílias olfativas encontradas 
em muitos alimentos. A molécula de hexan-3-ona é um 
exemplo desses compostos voláteis responsáveis pelo 
aroma, podendo ser obtida por processos energéticos 
realizados em meio ácido, na presença de oxidantes como 
o permanganato de potássio. 
Para se produzir esse composto volátil em laboratório, 
deve-se oxidar a molécula de`,
    alternatives: [
      { id: 'A', type: 'text', value: `hexanal.` },
      { id: 'B', type: 'text', value: `hexan-1-ol.` },
      { id: 'C', type: 'text', value: `hexan-3-ol.` },
      { id: 'D', type: 'text', value: `hex-1-en-1-ol.` },
      { id: 'E', type: 'text', value: `ácido hexanoico.` },
    ],
    correct: 'C',
    explanation: `A reação de oxidação de álcoois pode produzir cetonas ou aldeídos, a depender da posição do grupo funcional, ou seja, da hidroxila. Como queremos produzir cetonas, a hidroxila não pode estar em carbonos terminais. Respeitando o total de seis carbonos e nenhuma insaturação, temos, como única opção o hexan-3-ol, cuja estrutura pode ser vista a seguir.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 103,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Durante a evolução das plantas, ocorreu uma transição 
do ambiente aquático para o ambiente terrestre graças ao 
surgimento de algumas estruturas que as tornaram 
independentes da água. Esse fato permitiu maior dispersão 
desse grupo de seres vivos, sendo possível observá-los 
em diferentes ambientes na atualidade. 
Qual estrutura possibilitou a independência da água para 
a fecundação dos seres vivos citados acima?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Fruto.` },
      { id: 'B', type: 'text', value: `Esporo.` },
      { id: 'C', type: 'text', value: `Semente.` },
      { id: 'D', type: 'text', value: `Tubo polínico.` },
      { id: 'E', type: 'text', value: `Vaso condutor.` },
    ],
    correct: 'D',
    explanation: `O surgimento do tubo polínico no ancestral de Gimnospermas e Angiospermas permitiu o transporte do gameta masculino ao gameta feminino independentemente da água presente no meio.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 104,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O vidro contendo alumínio em sua composição é 
um excelente material para acondicionar medicamentos 
e suplementos, porque pode ser esterilizado por 
aquecimento. No entanto, quando o medicamento 
ou suplemento contém substâncias que se ligam 
fortemente ao íon desse metal, a dissolução do 
alumínio é promovida em função do deslocamento 
do equilíbrio químico estabelecido entre a espécie 
imobilizada no vidro e a espécie em solução. Por essa 
razão, recomenda-se que suplementos de nutrição de 
recém-nascidos contendo gluconato de cálcio sejam 
acondicionados em embalagens plásticas, e não nesse 
tipo de vidro. 
Atualização da recomendação da Sociedade Portuguesa de Neonatologia . 
Disponível em: www.spneonatologia.pt. Acesso em: 22 out. 2021 (adaptado). 
Caso esse suplemento seja acondicionado em embalagem 
desse tipo de vidro, o risco de contaminação por alumínio 
será maior se o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `vidro do frasco for translúcido.` },
      { id: 'B', type: 'text', value: `concentração de gluconato de cálcio for alta.` },
      { id: 'C', type: 'text', value: `frasco de vidro apresentar uma maior espessura.` },
      { id: 'D', type: 'text', value: `vidro for previamente esterilizado em altas 
temperaturas.` },
      { id: 'E', type: 'text', value: `reação do alumínio com gluconato de cálcio for 
endotérmica.` },
    ],
    correct: 'B',
    explanation: `De acordo com o texto, quando o medicamento ou suplemento contém substâncias que se ligam fortemente ao íon do alumínio (Al 3+ ), a dissolução do alumínio é promovida pelo deslocamento do equilíbrio entre o alumínio e a espécie em solução, nesse caso, o gluconato de cálcio. Gluconato de cálcio + íon alumínio ⇌ Gluconato de alumínio + íon cálcio Logo, compreende-se que quanto maior for a concentração de gluconato de cálcio, mais deslocado esse equilíbrio estará.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 105,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Barbatimão é o nome popular de uma árvore cuja 
casca é utilizada para fins medicinais. Essa casca é 
constituída principalmente de dois tecidos vegetais: 
periderme e floema. A extração da casca tem levado à 
morte muitos indivíduos dessa espécie, quando o corte 
retira um anel completo ao longo da circunferência do 
tronco. Aqueles que têm parte da casca retirada sem 
completar essa circunferência podem sobreviver. 
A morte desses indivíduos, decorrente da retirada do anel 
completo da casca, é provocada pela interrupção da`,
    images: ['/enem/2023/images/enem_2023_d2_q105.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `fotossíntese.` },
      { id: 'B', type: 'text', value: `transpiração.` },
      { id: 'C', type: 'text', value: `troca de gases.` },
      { id: 'D', type: 'text', value: `formação de brotos.` },
      { id: 'E', type: 'text', value: `nutrição das raízes.` },
    ],
    correct: 'E',
    explanation: `A retirada do anel da casca do caule (anel de Malpighi) promove a retirada do floema &#8211; tecido responsável pela condução da seiva elaborada que alimenta a raiz.`,
    subject: ['bio'],
    topics: ['Histologia básica (tecidos – leitura de figura)', 'Questões aleatórias'],
  },
  {
    id: 106,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A tecnologia de vacinas de RNA mensageiro (RNAm) 
é investigada há anos. Avanços científicos em genética 
molecular permitiram desenvolver uma vacina para 
controle da pandemia da covid-19 causada pelo vírus de 
RNA SARS-CoV-2. A vacina de RNAm tem sequências 
de genes do vírus. Entretanto, por ser muito instável, o 
RNAm deve ser recoberto por uma capa de lipídios que 
evita sua degradação e favorece sua ação. Dessa forma, 
o RNAm desempenhará sua função específica atuando 
no mesmo compartimento celular de sempre. 
Disponível em: https://sbim.org.br. Acesso em: 29 nov. 2021 (adaptado). 
A imunização produzida por esse tipo de vacina é 
alcançada por meio da`,
    alternatives: [
      { id: 'A', type: 'text', value: `estimulação de leucócitos induzida pela capa lipídica 
contendo RNAm.` },
      { id: 'B', type: 'text', value: `atuação do RNAm como sequestrador do vírus para 
o meio extracelular.` },
      { id: 'C', type: 'text', value: `tradução do RNAm em proteína viral, desencadeando 
a resposta antigênica.` },
      { id: 'D', type: 'text', value: `competição entre o RNAm vacinal e o RNA viral pelos 
sítios dos ribossomos.` },
      { id: 'E', type: 'text', value: `incorporação do RNAm viral ao genoma do hospedeiro, 
gerando novo fenótipo.` },
    ],
    correct: 'C',
    explanation: `A vacina de RNAm quando traduzida em proteínas virais estimula nossas células de defesa a promoverem a resposta imunológica de defesa.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 107,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Na fertilização in vitro, espermatozoides são adicionados 
aos gametas femininos retirados de uma mulher. Após o 
período de incubação, a fecundação é favorecida pela ação 
de enzimas. Em um procedimento realizado, observou-se 
que nenhum dos gametas femininos foi fertilizado e, 
posteriormente, verificou-se que havia sido adicionado, 
equivocadamente, um coquetel de inibidores das enzimas do 
acrossomo, no lugar de um dos nutrientes constituintes do 
meio de cultura. 
O coquetel de inibidores impediu o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `formação do pronúcleo masculino.` },
      { id: 'B', type: 'text', value: `início da divisão mitótica do zigoto.` },
      { id: 'C', type: 'text', value: `término da segunda divisão meiótica do ovócito.` },
      { id: 'D', type: 'text', value: `passagem do espermatozoide pela corona radiata e 
zona pelúcida.` },
      { id: 'E', type: 'text', value: `fusão das membranas plasmáticas do ovócito e do 
espermatozoide.` },
    ],
    correct: 'D',
    explanation: `O acrossoma é preenchido por enzimas que rompem os envoltórios do ovócito &#8211; corona radiata e zona pelúcida, permitindo a fecundação.`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 108,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O fogão por indução funciona a partir do surgimento 
de uma corrente elétrica induzida no fundo da panela, 
com consequente transformação de energia elétrica 
em calor por efeito Joule. A principal vantagem desses 
fogões é a eficiência energética, que é substancialmente 
maior que a dos fogões convencionais. 
A corrente elétrica mencionada é induzida por`,
    alternatives: [
      { id: 'A', type: 'text', value: `radiação.` },
      { id: 'B', type: 'text', value: `condução.` },
      { id: 'C', type: 'text', value: `campo elétrico variável.` },
      { id: 'D', type: 'text', value: `campo magnético variável.` },
      { id: 'E', type: 'text', value: `ressonância eletromagnética.` },
    ],
    correct: 'D',
    explanation: `O fogão por indução funciona com base na indução eletromagnética, que consiste na variação do fluxo magnético gerando uma força eletromotriz e consequentemente uma corrente elétrica. Para a variação do fluxo este tipo de fogão possui uma base que faz um fluxo magnético variável.`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 109,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Uma academia decide trocar gradualmente seus 
aparelhos de musculação. Agora, os frequentadores 
que utilizam os aparelhos do tipo 1 podem também 
utilizar os aparelhos do tipo 2, representados na figura, 
para elevar cargas correspondentes às massas M 1 e M 2 , 
com velocidade constante. A fim de que o exercício seja 
realizado com a mesma força F , os usuários devem ser 
orientados a respeito da relação entre as cargas nos dois 
tipos de aparelhos, já que as polias fixas apenas mudam a 
direção das forças, enquanto a polia móvel divide as forças. 
Em ambos os aparelhos, considere as cordas 
inextensíveis, as massas das polias e das cordas desprezíveis 
e que não há dissipação de energia. 
Aparelho do tipo 2 
Aparelho do tipo 1 
F 
F 
M 1 
M 2 
Para essa academia, qual deve ser a razão M 
 informada 
aos usuários? 
2 
M 
1`,
    images: ['/enem/2023/images/enem_2023_d2_q109.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1 
4` },
      { id: 'B', type: 'text', value: `1 
2` },
      { id: 'C', type: 'text', value: `1` },
      { id: 'D', type: 'text', value: `2` },
      { id: 'E', type: 'text', value: `4` },
    ],
    correct: 'D',
    explanation: `Na polia fixa temos apenas um fio puxando o corpo M1, enquanto na polia móvel temos dois fios puxando o corpo M2. Assim, a força F = P1 e 2F = P2 Fazendo as razões entre as equações e transformando P = mg, temos: 2F = M2g F = M1g M2`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 110,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um assistente de laboratório precisou descartar sete frascos contendo solução de nitrato de mercúrio(I) que não 
foram utilizados em uma aula prática. Cada frasco continha 5,25 g de Hg₂(NO₃)₂ dissolvidos em água. Temendo a 
toxidez do mercúrio e sabendo que o Hg₂ Cl₂ tem solubilidade muito baixa, o assistente optou por retirar o mercúrio da 
solução por precipitação com cloreto de sódio (NaCl), conforme a equação química: 
Hg₂(NO₃)₂ (aq) + 2 NaCl (aq) 
 Hg₂ Cl₂ (s) + 2 NaNO 3 (aq) 
Na dúvida sobre a massa de NaCl a ser utilizada, o assistente aumentou gradativamente a quantidade adicionada 
em cada frasco, como apresentado no quadro. 
 
O produto obtido em cada experimento foi filtrado, secado e teve sua massa aferida. O assistente organizou os 
resultados na forma de um gráfico que correlaciona a massa de NaCl adicionada com a massa de Hg₂ Cl₂ obtida em 
cada frasco. A massa molar do Hg₂(NO₃)₂ é 525 g mol -1 , a do NaCl é 58 g mol -1 e a do Hg₂ Cl₂ é 472 g mol -1 . 
Qual foi o gráfico obtido pelo assistente de laboratório? 
5 
6 
7 
Massa de Hg₂ Cl₂ (g) 
4 
3 
2 
1 
0 
0,0 
0,2 
0,4 
0,6 
0,8 
1,0 
1,2 
1,4`,
    images: ['/enem/2023/images/enem_2023_d2_q110.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'B',
    explanation: `A questão correlaciona o conhecimento referente ao cálculo estequiométrico à análise gráfica. Considerando que conhecemos a massa de ambos os reagentes, devemos relacioná-los para descobrir quem é o limitante e o excesso. Assim: &nbsp; 1 mol de Hg₂(NO₃)₂ ———— 2 mols de NaCl 525 g ———— 2. 58 g 5,25 g ———— x x = 1,16 g &nbsp; Ou seja, para reagir corretamente devemos usar 1,16g de NaCl, quaisquer quantidades acima deste valor fazem com que a substância esteja em excesso e não aumente a quantidade de produtos, ou seja, a partir dos frascos VI e VII e massa de Hg₂ Cl₂ torna-se constante. Considerando ainda que, se não houver massa de NaCl, não se forma Hg₂ Cl₂ , pois não ocorre reação, o gráfico deve partir da origem. Assim, resta apenas como opção a alternativa B.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 111,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Na tirinha de Maurício de Sousa, os personagens Cebolinha e Cascao fazem uma brincadeira utilizando duas latas 
e um barbante. Ao perceberem que o som pode ser transmitido através do barbante, resolvem alterar o comprimento do 
barbante para ficar cada vez mais extenso. As demais condicoes permaneceram inalteradas durante a brincadeira. 
Na prática, à medida que se aumenta o comprimento do barbante, ocorre a redução de qual característica da onda sonora?`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `Altura.` },
      { id: 'B', type: 'text', value: `Período.` },
      { id: 'C', type: 'text', value: `Amplitude.` },
      { id: 'D', type: 'text', value: `Velocidade.` },
      { id: 'E', type: 'text', value: `Comprimento de onda.` },
    ],
    correct: 'C',
    explanation: `Conforme o som vai percorrendo mais distância, vai perdendo intensidade, reduzindo, assim, sua amplitude.`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 112,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Informações digitais - dados - são gravadas em discos ópticos, como CD e DVD, na forma de cavidades 
microscópicas. A gravação e a leitura óptica dessas informações são realizadas por um laser (fonte de luz monocromática). 
Quanto menores as dimensões dessas cavidades, mais dados são armazenados na mesma área do disco. O fator limitante 
para a leitura de dados é o espalhamento da luz pelo efeito de difração, fenômeno que ocorre quando a luz atravessa um 
obstáculo com dimensões da ordem de seu comprimento de onda. Essa limitação motivou o desenvolvimento de lasers 
com emissão em menores comprimentos de onda, possibilitando armazenar e ler dados em cavidades cada vez menores. 
Em qual região espectral se situa o comprimento de onda do laser que otimiza o armazenamento e a leitura de dados 
em discos de uma mesma área?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Violeta.` },
      { id: 'B', type: 'text', value: `Azul.` },
      { id: 'C', type: 'text', value: `Verde.` },
      { id: 'D', type: 'text', value: `Vermelho.` },
      { id: 'E', type: 'text', value: `Infravermelho.` },
    ],
    correct: 'A',
    explanation: `Analisando a equação de onda: v=λf Para a redução do comprimento de onda é necessário um aumento da frequência, uma vez que a velocidade se mantém constante por depender apenas do meio de propagação. Das cores, a de maior frequência é a violeta.`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 113,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O bluetooth é uma tecnologia de comunicação sem fio, de curto alcance, presente em diferentes dispositivos 
eletrônicos de consumo. Ela permite que aparelhos eletrônicos diferentes se conectem e troquem dados entre 
si. No padrão bluetooth , denominado de Classe 2, as antenas transmitem sinais de potência igual a 2,4 mW e 
possibilitam conectar dois dispositivos distanciados até 10 m. Considere que essas antenas se comportam como 
fontes puntiformes que emitem ondas eletromagnéticas esféricas e que a intensidade do sinal é calculada pela 
potência por unidade de área. Considere 3 como valor aproximado para π . 
Para que o sinal de bluetooth seja detectado pelas antenas, o valor mínimo de sua intensidade, em W 
m² , é mais 
próximo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `2,0 × 10⁻⁶ .` },
      { id: 'B', type: 'text', value: `2,0 × 10⁻⁵ .` },
      { id: 'C', type: 'text', value: `2,4 × 10⁻⁵ .` },
      { id: 'D', type: 'text', value: `2,4 × 10⁻³ .` },
      { id: 'E', type: 'text', value: `2,4 × 10⁻¹ .` },
    ],
    correct: 'A',
    explanation: `De acordo com o enunciado, I = P/A. Onde A é a área da esfera, calculada por: A=4R 2 . Assim,`,
    subject: ['fis'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 114,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Uma equipe de segurança do transporte de uma empresa 
avalia o comportamento das tensões que aparecem em duas 
cordas, 1 e 2, usadas para prender uma carga de massa 
M = 200 kg na carroceria, conforme a ilustração. Quando o 
caminhão parte do repouso, sua aceleração é constante 
e igual a 3 m/s² e, quando ele é freado bruscamente, sua 
frenagem é constante e igual a 5 m/s² . Em ambas as 
situações, a carga encontra-se na iminência de movimento, 
e o sentido do movimento do caminhão está indicado na 
figura. O coeficiente de atrito estático entre a caixa e o 
assoalho da carroceria é igual a 0,2. Considere a aceleração 
da gravidade igual a 10 m/s² , as tensões iniciais nas cordas 
iguais a zero e as duas cordas ideais. 
1 
2 
M 
V 
Nas situações de aceleração e frenagem do caminhão, 
as tensões nas cordas 1 e 2, em newton, serão`,
    images: ['/enem/2023/images/enem_2023_d2_q114.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `aceleração: T 1 = 0 e T 2 = 200; frenagem: T 1 = 600 e 
T 2 = 0.` },
      { id: 'B', type: 'text', value: `aceleração: T 1 = 0 e T 2 = 200; frenagem: T 1 = 1 400 e 
T 2 = 0.` },
      { id: 'C', type: 'text', value: `aceleração: T 1 = 0 e T 2 = 600; frenagem: T 1 = 600 e 
T 2 = 0.` },
      { id: 'D', type: 'text', value: `aceleração: T 1 = 560 e T 2 = 0; frenagem: T 1 = 0 e 
T 2 = 960.` },
      { id: 'E', type: 'text', value: `aceleração: T 1 = 640 e T 2 = 0; frenagem: T 1 = 0 e 
T 2 = 1 040.` },
    ],
    correct: 'A',
    explanation: `Primeiramente devemos ter em mente que na aceleração o corpo é puxado para frente e por isso a corda 1 não é tracionada, assim T1 = 0. Analogamente, na frenagem o corpo é puxado para trás e por isso a corda T2 não é tracionada, assim T2 = 0. E que em ambos os casos, como o corpo está na iminência de movimento a força de atrito atuante é a força de atrito estática máxima, calculada como: fat E Máx =N=0,22000=400 N Na aceleração (a = 3 m/s²) T2+fat E Máx =ma T2+400=2003 T2=200 N &nbsp; Na desaceleração (a = 5 m/s²) T1+fat E Máx =ma T1+400=2005 T1=600 N &nbsp;`,
    subject: ['fis'],
    topics: ['Leis de Newton', 'Questões aleatórias'],
  },
  {
    id: 115,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A biorremediação designa tratamentos que usam 
organismos para reduzir a quantidade de substâncias 
tóxicas no ambiente ou degradá-las em substâncias 
não tóxicas ou de menor toxicidade. Uma planta aquática, 
o aguapé, tem sido utilizada para a biorremediação de 
ambientes contaminados por metais tóxicos. Sabe-se 
que esses poluentes serão captados para dentro do 
corpo do vegetal. 
Dentro do corpo do vegetal, esses contaminantes serão`,
    alternatives: [
      { id: 'A', type: 'text', value: `digeridos por enzimas.` },
      { id: 'B', type: 'text', value: `acumulados nos tecidos.` },
      { id: 'C', type: 'text', value: `eliminados pelos estômatos.` },
      { id: 'D', type: 'text', value: `metabolizados por glândulas.` },
      { id: 'E', type: 'text', value: `utilizados como fonte energética.` },
    ],
    correct: 'B',
    explanation: `Metais tóxicos são compostos não biodegradáveis se acumulando nos tecidos do vegetal (aguapé).`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
  },
  {
    id: 116,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O ciclo do nitrogênio é composto por várias etapas, 
conforme a figura, sendo cada uma desempenhada por 
um grupo específico de microrganismos.
Se o grupo dos microrganismos decompositores fosse
exterminado, qual etapa não ocorreria?`,
    images: ['/enem/2023/images/enem_2023_d2_q116.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `2` },
      { id: 'C', type: 'text', value: `3` },
      { id: 'D', type: 'text', value: `4` },
      { id: 'E', type: 'text', value: `5` },
    ],
    correct: 'B',
    explanation: `Comentário A decomposição (amonificação) converte os detritos nitrogenados da matéria orgânica em amônia (NH 3 ).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 117,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Os raios cósmicos são fontes de radiação ionizante 
potencialmente perigosas para o organismo humano. 
Para quantificar a dose de radiação recebida, utiliza-se 
o sievert (Sv), definido como a unidade de energia 
recebida por unidade de massa. A exposição à radiação 
proveniente de raios cósmicos aumenta com a altitude, 
o que pode representar um problema para as tripulações 
de aeronaves. Recentemente, foram realizadas medições 
acuradas das doses de radiação ionizante para voos entre 
Rio de Janeiro e Roma. Os resultados têm indicado que a 
dose média de radiação recebida na fase de cruzeiro (que 
geralmente representa 80% do tempo total de voo) desse 
trecho intercontinental é 2 μSv/h. As normas internacionais 
da aviação civil limitam em 1 000 horas por ano o tempo 
de trabalho para as tripulações que atuem em voos 
intercontinentais. Considere que a dose de radiação ionizante 
para uma radiografia torácica é estimada em 0,2 mSv. 
RUAS, A. C. O tripulante de aeronaves e a radiação ionizante . 
São Paulo: Edição do Autor, 2019 (adaptado). 
A quantas radiografias torácicas corresponde a dose de 
radiação ionizante à qual um tripulante que atue no trecho 
Rio de Janeiro−Roma é exposto ao longo de um ano?`,
    alternatives: [
      { id: 'A', type: 'text', value: `8` },
      { id: 'B', type: 'text', value: `10` },
      { id: 'C', type: 'text', value: `80` },
      { id: 'D', type: 'text', value: `100` },
      { id: 'E', type: 'text', value: `1 000` },
    ],
    correct: 'A',
    explanation: ``,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 118,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A gasolina é uma mistura de hidrocarbonetos de 
cadeias saturadas contendo de 8 a 12 átomos de carbono. 
Além disso, a gasolina de alto desempenho deve conter 
elevados teores de hidrocarbonetos de cadeias ramificadas, 
de forma a resistir à compressão e entrar em ignição apenas 
quando a vela aciona uma centelha elétrica no motor. 
No quadro, estão apresentados compostos que podem 
ser utilizados como combustíveis. 
 
Entre esses compostos, aquele que conferirá maior 
desempenho como combustível é o`,
    images: ['/enem/2023/images/enem_2023_d2_q118.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },
    ],
    correct: 'C',
    explanation: `De acordo com o texto, a gasolina é formada por hidrocarbonetos de cadeia saturada contendo de 8 a 12 carbonos. Além disso, apresenta alto desempenho quando contém elevados teores de hidrocarbonetos ramificados. Entre os hidrocarbonetos presentes nas opções, os que apresentam cadeia saturada são n-decano, n-heptano e 2,2,4-trimetilpentano. Aquele que fornecerá o maior desempenho será o mais ramificado, logo, 2,2,4-trimetilpentano, que apresenta 3 ramificações.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 119,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `De acordo com a Constituição Federal, é competência 
dos municípios o gerenciamento dos serviços de limpeza e 
coleta dos resíduos urbanos (lixo). No entanto, há relatos 
de que parte desse lixo acaba sendo incinerado, liberando 
substâncias tóxicas para o ambiente e causando acidentes 
por explosões, principalmente quando ocorre a incineração 
de frascos de aerossóis (por exemplo: desodorantes, 
inseticidas e repelentes). A temperatura elevada provoca 
a vaporização de todo o conteúdo dentro desse tipo de 
frasco, aumentando a pressão em seu interior até culminar 
na explosão da embalagem. 
ZVEIBIL, V. Z. et al. Cartilha de limpeza urbana . Disponível em: 
www.ibam.org.br. Acesso em: 6 jul. 2015 (adaptado). 
Suponha um frasco metálico de um aerossol de 
capacidade igual a 100 mL, contendo 0,1 mol de produtos 
gasosos à temperatura de 650 °C, no momento da explosão. 
Considere: R = 0,082 L atm 
⋅ 
⋅ 
mol K 
A pressão, em atm, dentro do frasco, no momento da 
explosão, é mais próxima de`,
    alternatives: [
      { id: 'A', type: 'text', value: `756.` },
      { id: 'B', type: 'text', value: `533.` },
      { id: 'C', type: 'text', value: `76.` },
      { id: 'D', type: 'text', value: `53.` },
      { id: 'E', type: 'text', value: `13.` },
    ],
    correct: 'C',
    explanation: `V = 100 mL = 0,1 L n = 0,1 mol R = 0,082 T = 650 ºC = 923 K PV = nRT ∴ P ∙ 0,1 = 0,1 ∙ 0,082 ∙ 923 ∴ P = 75,686 atm (aproximadamente 76 atm)`,
    subject: ['bio'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 120,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O circuito com três lâmpadas incandescentes idênticas, 
representado na figura, consiste em uma associação mista 
de resistores. Cada lâmpada ( L  1 , L 2 e L 3 ) é associada, 
em paralelo, a um resistor de resistência R , formando um 
conjunto. Esses conjuntos são associados em série, tendo 
todas as lâmpadas o mesmo brilho quando ligadas à fonte 
de energia. Após vários dias em uso, apenas a lâmpada L 2 
queima, enquanto as demais permanecem acesas. 
L ¹ 
R 
R 
L ² 
L ³ 
Fonte de 
energia 
R 
Em relação à situação em que todas as lâmpadas 
funcionam, após a queima de L 2 , os brilhos das 
lâmpadas serão`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `os mesmos.` },
      { id: 'B', type: 'text', value: `mais intensos.` },
      { id: 'C', type: 'text', value: `menos intensos.` },
      { id: 'D', type: 'text', value: `menos intenso para L  1 e o mesmo para L 3 .` },
      { id: 'E', type: 'text', value: `mais intenso para L  1 e menos intenso para L 3 .` },
    ],
    correct: 'C',
    explanation: `Uma vez que a lâmpada não faz mais parte circuito e estava associada em paralelo com o resistor, a resistência equivalente aumenta, reduzindo o valor da corrente total e consequentemente o brilho de cada lâmpada.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 121,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Os solos amazônicos, ricos em silicato, não são apropriados para o cultivo por serem incapazes de reter nutrientes. 
Contudo, descobertas arqueológicas têm demonstrado que os antigos habitantes da Amazônia dominavam a técnica 
de preparo de um insumo agrícola natural, denominado terra preta. Esse insumo era constituído principalmente 
de uma espécie de biocarvão ( biochar ) obtido da queima de matéria orgânica, como troncos de árvores, pedaços de 
ossos e esterco, capaz de manter um solo fértil por anos. 
Admite-se que o efeito do biocarvão na fertilização do solo estava, em parte, relacionado à presença de grupos 
orgânicos do tipo carboxilato em sua superfície, carregados negativamente (-COO − ). Esses grupos atraem íons 
positivos necessários como nutrientes, tais quais os provenientes do potássio (K), do cálcio (Ca) e do magnésio (Mg), 
além de micronutrientes, como zinco (Zn) e ferro (Fe). Essa ligação no solo fertilizado é predominantemente iônica, 
conforme ilustra a figura, em que M n+ representa os cátions metálicos. De acordo com a escala de Pauling, a 
eletronegatividade do elemento oxigênio é igual a 3,44. 
M n+ 
O 
O - 
O 
O - M n+ 
Solo com biocarvão 
Solo fertilizado 
O quadro apresenta os valores de eletronegatividade desses cinco elementos metálicos. 
Elemento metálico 
Eletronegatividade 
K 
0,82 
Ca 
1,00 
Mg 
1,31 
Zn 
1,65 
Fe 
1,83 
MICHALOVIC, M. Ancient Soil Chemists of the Amazon. ChemMatters , fev. 2009 (adaptado). 
O cátion que resultará em uma interação de maior caráter iônico com o ânion carboxilato será aquele proveniente 
do elemento`,
    images: ['/enem/2023/images/enem_2023_d2_q121_1.jpg', '/enem/2023/images/enem_2023_d2_q121_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `potássio.` },
      { id: 'B', type: 'text', value: `cálcio.` },
      { id: 'C', type: 'text', value: `magnésio.` },
      { id: 'D', type: 'text', value: `zinco.` },
      { id: 'E', type: 'text', value: `ferro.` },
    ],
    correct: 'A',
    explanation: `A partir da interpretação do texto, percebe-se que é necessária a formação de uma ligação iônica de caráter mais intenso entre o oxigênio do biocarvão e um cátion. Considerando os valores de eletronegatividade do oxigênio e dos metais tabelados, temos a maior diferença de eletronegatividade obtida com a ligação entre oxigênio e o potássio. ∆E = 3,44 &#8211; 0,82 = 2,62`,
    subject: ['bio'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 122,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Em uma indústria alimentícia, para produção de doce de leite, utiliza-se um tacho de parede oca com uma entrada 
para vapor de água a 120 °C  e uma saída para água líquida em equilíbrio com o vapor a 100 °C. Ao passar pela parte 
oca do tacho, o vapor de água transforma-se em líquido, liberando energia. A parede transfere essa energia para o 
interior do tacho, resultando na evaporação de água e consequente concentração do produto. 
No processo de concentração do produto, é utilizada energia proveniente`,
    images: ['/enem/2023/images/enem_2023_d2_q122.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `somente do calor latente de vaporização.` },
      { id: 'B', type: 'text', value: `somente do calor latente de condensação.` },
      { id: 'C', type: 'text', value: `do calor sensível e do calor latente de vaporização.` },
      { id: 'D', type: 'text', value: `do calor sensível e do calor latente de condensação.` },
      { id: 'E', type: 'text', value: `do calor latente de condensação e do calor latente de vaporização.` },
    ],
    correct: 'D',
    explanation: `A questão pede para você analisar o processo relacionado a energia proveniente. Como a energia proveniente vem do vapor a 120 ºC, que libera energia para a parede, temos um processo de calor sensível (ligado com a redução da temperatura de 120°C para 100°C) e de calor latente de condensação (ligado a transformação do estado gasoso para líquido).`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 123,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Entre os medicamentos mais comuns consumidos para o alivio da dor esta o ibuprofeno, um composto quiral 
com ação anti-inflamatória e efeito analgésico, que é comercializado como fármaco opticamente puro, ou seja, sem 
a mistura com outro isômero óptico. A fórmula estrutural plana do ibuprofeno e: 
Ibuprofeno 
Além do ibuprofeno, destacam-se também os princípios ativos a seguir, presentes em outros medicamentos para 
o alívio da dor: 
H 
H 
N 
N 
O 
O 
O 
HO 
Fenacetina 
Paracetamol 
Cl 
NH 
Cl 
Na + 
O − 
O 
Diclofenaco sódico 
O princípio ativo que apresenta o mesmo tipo de isomeria espacial que o ibuprofeno e o(a)`,
    images: ['/enem/2023/images/enem_2023_d2_q123.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `fenacetina.` },
      { id: 'B', type: 'text', value: `paracetamol.` },
      { id: 'C', type: 'text', value: `dipirona sódica.` },
      { id: 'D', type: 'text', value: `diclofenaco sódico.` },
      { id: 'E', type: 'text', value: `butilbrometo de escopolamina.` },
    ],
    correct: 'E',
    explanation: `O ibuprofeno é uma molécula quiral e apresenta isomeria óptica, logo, apresenta carbono assimétrico. O butilbrometo de escopolamina também apresenta carbono assimétrico e isomeria óptica.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 124,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Uma concessionária é responsável por um trecho de 480 quilômetros de uma rodovia. Nesse trecho, foram 
construídas 10 praças de pedágio, onde funcionários recebem os pagamentos nas cabines de cobrança. Também 
existe o serviço automático, em que os veículos providos de um dispositivo passam por uma cancela, que se abre 
automaticamente, evitando filas e diminuindo o tempo de viagem. Segundo a concessionária, o tempo médio para 
efetuar a passagem em uma cabine é de 3 minutos, e as velocidades máximas permitidas na rodovia são 100 km/h, 
para veículos leves, e 80 km/h, para veículos de grande porte. 
Considere um carro e um caminhão viajando, ambos com velocidades constantes e iguais às máximas permitidas, 
e que somente o caminhão tenha o serviço automático de cobrança. 
Comparado ao caminhão, quantos minutos a menos o carro leva para percorrer toda a rodovia?`,
    alternatives: [
      { id: 'A', type: 'text', value: `30` },
      { id: 'B', type: 'text', value: `42` },
      { id: 'C', type: 'text', value: `72` },
      { id: 'D', type: 'text', value: `288` },
      { id: 'E', type: 'text', value: `360` },
    ],
    correct: 'B',
    explanation: `Para o cálculo do tempo de travessia temos: Assim, a diferença entre eles seria de 1,2 h = 72 min, se não houvessem paradas. Contudo o carro para 10 vezes em pedágios por 3 min em cada uma. Assim, o carro faz o trajeto 42 min antes.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 125,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Pais com síndrome de Down 
A síndrome de Down é uma alteração genética associada a trissomia do cromossomo 21, ou seja, o individuo possui 
três cromossomos 21 e não um par, como é normal. Isso ocorre pela união de um gameta contendo um cromossomo 21 
com um gameta possuidor de dois cromossomos 21. Embora, normalmente, as mulheres com a síndrome sejam 
estéreis, em 2008, no interior de São Paulo, uma delas deu a luz uma menina sem a síndrome de Down. 
MORENO, T. Três anos após dar à luz, mãe portadora de síndrome de Down revela detalhes de seu dia a dia . Disponível em: www.band.uol.com.br. Acesso em: 31 out. 2013 (adaptado). 
Sabendo disso, um jovem casal, ambos com essa síndrome, procura um médico especialista para aconselhamento 
genético porque querem ter um bebê. 
O médico informa ao casal que, com relação ao cromossomo 21, os zigotos formados serão`,
    alternatives: [
      { id: 'A', type: 'text', value: `todos normais.` },
      { id: 'B', type: 'text', value: `todos tetrassômicos.` },
      { id: 'C', type: 'text', value: `apenas normais ou tetrassômicos.` },
      { id: 'D', type: 'text', value: `apenas trissômicos ou tetrassômicos.` },
      { id: 'E', type: 'text', value: `normais, trissômicos ou tetrassômicos.` },
    ],
    correct: 'E',
    explanation: `Indivíduos com síndrome de Down possuem três cromossomos 21. Cada indivíduo parental poderá formar gametas com 1 ou dois cromossomos 21. Dessa forma as combinações possíveis em seus filhos são: Espermatozóide normal (1 cromossomo 21) + óvulo normal (1 cromossomo 21) &#8211; filho normal (2 cromossomos 21). Espermatozóide normal (1 cromossomo 21) + óvulo afetado (2 cromossomo 21) &#8211; filho afetado por trissomia (3 cromossomos 21). O mesmo ocorrerá com espermatozóide afetado e óvulo normal. Espermatozóide afetado (2 cromossomos 21) + óvulo afetado (2 cromossomos 21) &#8211; filho afetado por tetrassomia (4 cromossomos 21).`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 126,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Para que uma molécula dê origem a um medicamento de administração oral, além de apresentar atividade 
farmacológica, deve ser capaz de atingir o local de ação. Para tanto, essa molécula não deve se degradar no estômago 
(onde o meio é fortemente ácido e há várias enzimas que reagem mediante catálise ácida), deve ser capaz de atravessar 
as membranas celulares e ser solúvel no plasma sanguíneo (sistema aquoso). Para os fármacos cujas estruturas são 
formadas por cadeias carbônicas longas contendo pelo menos um grupamento amino, um recurso tecnológico empregado 
é sua conversão no cloridrato correspondente. Essa conversão é representada, de forma genérica, pela equação química: 
R 3 N + HCl 
 (R 3 NH) + Cl - 
O aumento da eficiência de circulação do fármaco no sangue, promovido por essa conversão, deve-se ao incremento 
de seu(sua)`,
    alternatives: [
      { id: 'A', type: 'text', value: `basicidade.` },
      { id: 'B', type: 'text', value: `lipofilicidade.` },
      { id: 'C', type: 'text', value: `caráter iônico.` },
      { id: 'D', type: 'text', value: `cadeia carbônica.` },
      { id: 'E', type: 'text', value: `estado de oxidação.` },
    ],
    correct: 'C',
    explanation: `A reação entre o composto orgânico contendo o grupo amino (R 3 N) e o ácido clorídrico forma um sal (cloridrato), composto iônico e de maior solubilidade em água, facilitando sua solubilização no sangue, que é formado principalmente por água. Logo, o aumento do caráter iônico da substância facilitou sua circulação no sangue.`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 127,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Toxicidade do cianeto 
A produção de ATP depende do gradiente de prótons gerado pela cadeia respiratória. Nessas reações, os elétrons 
provenientes da oxidação do NADH em NAD + percorrem a cadeia até chegarem à citocromo c oxidase reduzindo o 
Fe 3+ a Fe 2+ . O oxigênio atua como aceptor final desses elétrons formando água. O cianeto é uma espécie química 
altamente tóxica que tem grande afinidade pelo Fe 3+ . Quando células são expostas ao cianeto, ele se liga ao sítio de 
Fe 3+ da citocromo c oxidase, impedindo a sua conversão em Fe 2+ e bloqueando a cadeia respiratória. 
Substrato 
proveniente 
do nutriente 
Forma 
reduzida 
Forma 
oxidada 
NAD + 
Transportador 
1 
Transportador 
2 
Transportador 
3 
Citocromo c 
oxidase 
1 
2 O 2 
CO 2 
NADH 
Forma 
reduzida 
Forma 
oxidada 
Forma 
oxidada 
ALBERTS, B. et al. Biologia molecular da célula . Porto Alegre: Artmed, 2010 (adaptado). 
Esse bloqueio aumenta a concentração celular de`,
    images: ['/enem/2023/images/enem_2023_d2_q127.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `ATP.` },
      { id: 'B', type: 'text', value: `água.` },
      { id: 'C', type: 'text', value: `NADH.` },
      { id: 'D', type: 'text', value: `dióxido de carbono.` },
      { id: 'E', type: 'text', value: `citocromo c oxidase.` },
    ],
    correct: 'C',
    explanation: `O cianeto ao inibir a enzima citocromo C oxidase promove a interrupção da cadeia transportadora de elétrons. Dessa forma, não haverá mais reoxidação dos NADH promovendo assim seu acúmulo.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 128,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `É comum em viagens de avião sermos solicitados a 
desligar aparelhos cujo funcionamento envolva a emissão 
ou a recepção de ondas eletromagnéticas, como celulares. 
A justificativa dada para esse procedimento é, entre 
outras coisas, a necessidade de eliminar fontes de sinais 
eletromagnéticos que possam interferir nas comunicações, 
via rádio, dos pilotos com a torre de controle. 
Essa interferência poderá ocorrer somente se as ondas 
emitidas pelo celular e as recebidas pelo rádio do avião`,
    alternatives: [
      { id: 'A', type: 'text', value: `forem ambas audíveis.` },
      { id: 'B', type: 'text', value: `tiverem a mesma potência.` },
      { id: 'C', type: 'text', value: `tiverem a mesma frequência.` },
      { id: 'D', type: 'text', value: `tiverem a mesma intensidade.` },
      { id: 'E', type: 'text', value: `propagarem-se com velocidades diferentes.` },
    ],
    correct: 'C',
    explanation: `O fenômeno ondulatório da interferência consiste na superposição de ondas, tendo encontro de cristas e/ou vales. Para esse processo acontecer, é necessário que as ondas envolvidas tenham a mesma frequência.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 129,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O Aldrin é um inseticida agrícola organoclorado 
sintético de baixa polaridade, cuja estrutura molecular 
simétrica, de fórmula C 12 H 8 Cl 6 , está representada na 
figura. Introduzido na agricultura a partir da década de 
1950, esse composto apresenta alta persistência no meio 
ambiente e acumulação nos organismos, sendo danoso 
para a saúde. 
H 
C 
H 
Cl 
C 
Cl 
Cl 
Cl 
Cl 
Cl 
Aldrin 
VIEGAS JÚNIOR, C. Terpenos com atividade inseticida: uma alternativa para 
o controle químico de insetos. Química Nova , v. 26, n. 3, 2003 (adaptado). 
Um pesquisador coletou fluidos biológicos de indivíduos 
de uma população contaminada por esse inseticida agrícola. 
Ele analisou amostras de saliva, sangue, lágrima, urina e 
leite quanto à presença dessa substância. 
Em qual dos fluidos o pesquisador provavelmente encontrou 
a maior concentração dessa substância?`,
    images: ['/enem/2023/images/enem_2023_d2_q129.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Saliva, por consequência da atividade de enzimas.` },
      { id: 'B', type: 'text', value: `Sangue, em função das hemácias e leucócitos.` },
      { id: 'C', type: 'text', value: `Lágrima, em razão da concentração de sais.` },
      { id: 'D', type: 'text', value: `Urina, pela presença de moléculas de ureia.` },
      { id: 'E', type: 'text', value: `Leite, por causa do alto teor de gorduras.` },
    ],
    correct: 'E',
    explanation: `O Aldrin é uma substância apolar, logo, será encontrado em maior concentração no leite, visto que apresenta um alto teor de gorduras, também apolares, permitindo a solubilização do aldrin.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 130,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Uma cafeteria adotou copos fabricados a partir 
de uma composição de 50% de plástico reciclado não 
biodegradável e 50% de casca de café. O copo é reutilizável 
e retornável, pois o material, semelhante a uma cerâmica, 
suporta a lavagem. Embora ele seja comercializado por 
um preço considerado alto quando comparado ao de um 
copo de plástico descartável, essa cafeteria possibilita aos 
clientes retornarem o copo sujo e levarem o café quente 
servido em outro copo já limpo e higienizado. O material 
desse copo oferece também o conforto de não esquentar 
na parte externa. 
Cafeteria adota copo reutilizável feito com casca de café. Disponível em: 
www.gazetadopovo.com.br. Acesso em: 5 dez. 2019 (adaptado). 
Quais duas vantagens esse copo apresenta em 
comparação ao copo descartável?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Ter a durabilidade de uma cerâmica e ser totalmente 
biodegradável.` },
      { id: 'B', type: 'text', value: `Ser tão durável quanto uma cerâmica e ter alta 
condutividade térmica.` },
      { id: 'C', type: 'text', value: `Ser um mau condutor térmico e aumentar o resíduo 
biodegradável na natureza.` },
      { id: 'D', type: 'text', value: `Ter baixa condutividade térmica e reduzir o resíduo 
não biodegradável na natureza.` },
      { id: 'E', type: 'text', value: `Ter alta condutividade térmica e possibilitar a 
degradação do material no meio ambiente.` },
    ],
    correct: 'D',
    explanation: `Para o copo não esquentar do lado de fora, é necessário que tenha baixa condutividade térmica, além do benefício de reduzir os resíduo biodegradáveis.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 131,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O consumo exagerado de refrigerantes é preocupante, 
pois contribui para o aumento de casos de obesidade e 
diabetes. Considere dois refrigerantes enlatados, um 
comum e um diet, e que ambos possuam a mesma 
quantidade de aditivos, exceto pela presença de 
açúcar. O refrigerante comum contém basicamente 
água carbonatada e grande quantidade de açúcar; 
já o refrigerante diet tem água carbonatada e adoçantes, 
cujas massas são muito pequenas. 
CAVAGIS, A. D. M.; PEREIRA, E. A.; OLIVEIRA, L. C. Um método simples para avaliar o teor 
de sacarose e CO 2 em refrigerantes. Química Nova na Escola , n. 3, ago. 2014 (adaptado). 
Entre as duas versões apresentadas, o refrigerante 
comum possui`,
    alternatives: [
      { id: 'A', type: 'text', value: `maior densidade.` },
      { id: 'B', type: 'text', value: `menor viscosidade.` },
      { id: 'C', type: 'text', value: `maior volume de gás dissolvido.` },
      { id: 'D', type: 'text', value: `menor massa de solutos dissolvidos.` },
      { id: 'E', type: 'text', value: `maior temperatura de congelamento.` },
    ],
    correct: 'A',
    explanation: `O texto destaca a diferença entre os refrigerantes normais e sem açúcar. No refrigerante diet, a presença de adoçantes de menor massa diminui a densidade, visto que d = m/v, com menor massa temos, também, menor densidade.`,
    subject: ['bio'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 132,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O manual de um automóvel alerta sobre os cuidados em relação à pressão do ar no interior dos pneus. 
Recomenda-se que a pressão seja verificada com os pneus frios (a temperatura ambiente). Um motorista, 
desatento a essa informação, realizou uma viagem longa sobre o asfalto quente e, em seguida, verificou que a 
pressão P 0 no interior dos pneus não era a recomendada pelo fabricante. Na ocasião, a temperatura dos pneus 
era T 0 . Após um longo período em repouso, os pneus do carro atingiram a temperatura ambiente T . Durante o 
resfriamento, não há alteração no volume dos pneus e na quantidade de ar no seu interior. Considere o ar dos 
pneus um gás perfeito (também denominado gás ideal). 
Durante o processo de resfriamento, os valores de pressão em relação à temperatura ( P × T ) são representados 
pelo gráfico: 
P (Pa) 
P 0`,
    images: ['/enem/2023/images/enem_2023_d2_q132_A.jpg', '/enem/2023/images/enem_2023_d2_q132_B.jpg', '/enem/2023/images/enem_2023_d2_q132_C.jpg', '/enem/2023/images/enem_2023_d2_q132_D.jpg', '/enem/2023/images/enem_2023_d2_q132_E.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'E',
    explanation: `A relação de pressão e temperatura para um gás, a volume constante, pode ser analisada pela equação geral dos gases. / = P/T A partir dela, podemos entender que o aumento da temperatura gera um aumento na pressão, assim como uma redução na temperatura gera uma redução na pressão. Como a questão comenta sobre o automóvel ficar em repouso por um tempo, gerando uma redução de temperatura, precisamos de um gráfico que represente essa redução de temperatura, tendo como consequência, a redução da pressão. Não só a letra E é a única alternativa que representa essa relação, como também demonstra a relação linear entre as grandezas verificadas pela fórmula. &nbsp;`,
    subject: ['fis'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 133,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O descarte de detergentes comuns nos esgotos 
domésticos ocasiona a formação de uma camada 
de espuma que impede a entrada de oxigênio na 
água. Os microrganismos que vivem nessas águas 
não são capazes de quebrar moléculas ramificadas, 
ocorrendo assim um desequilíbrio ambiental nos rios. 
A fórmula a seguir representa a estrutura química de um 
tensoativo presente na composição de um detergente 
não biodegradável. 
S 
O 
O 
O - Na + 
 Tensoativo não biodegradável 
Qual modificação química na estrutura desse tensoativo 
o tornaria um detergente biodegradável?`,
    images: ['/enem/2023/images/enem_2023_d2_q133.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Retirar a parte polar da molécula.` },
      { id: 'B', type: 'text', value: `Eliminar as insaturações do anel aromático.` },
      { id: 'C', type: 'text', value: `Trocar o grupo aniônico por um grupo neutro.` },
      { id: 'D', type: 'text', value: `Alterar o grupo aniônico por um grupo catiônico.` },
      { id: 'E', type: 'text', value: `Modificar a cadeia carbônica para cadeia normal.` },
    ],
    correct: 'E',
    explanation: `O texto destaca que, para que os microrganismos contidos na água não são capazes de quebrar moléculas ramificadas. Note que, alterando a cadeia carbônica ramificada contida no tensoativo para uma cadeia normal os microrganismos serão capazes de degradá-lo.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 134,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Avaliação de substâncias genotóxicas 
O ensaio de micronúcleos é um teste de avaliação de 
genotoxicidade que associa a presença de micronúcleos 
(pequenos núcleos que aparecem próximo aos núcleos 
das células) com lesões genéticas. Os micronúcleos são 
fragmentos de DNA encapsulados, provenientes do fuso 
mitótico durante a divisão celular. 
DIAS, V. M. Micronúcleos em células tumorais : biologia e implicações 
para a tumorigênese. Dissertação de Mestrado. USP, 2006 (adaptado). 
Os micronúcleos se originam dos(as)`,
    alternatives: [
      { id: 'A', type: 'text', value: `nucléolos.` },
      { id: 'B', type: 'text', value: `lisossomos.` },
      { id: 'C', type: 'text', value: `ribossomos.` },
      { id: 'D', type: 'text', value: `mitocôndrias.` },
      { id: 'E', type: 'text', value: `cromossomos.` },
    ],
    correct: 'E',
    explanation: `Micronúcleos são fragmentos de DNA formados a partir de erros na separação do fuso mitótico, dessa forma, se originam a partir dos cromossomos em segregação.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 135,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O petróleo é uma matéria-prima muito valiosa 
e métodos geofísicos são úteis na sua prospecção. 
É possível identificar a composição de materiais 
estratificados medindo-se a velocidade de propagação 
do som (onda mecânica) através deles. Considere que 
uma camada de 450 m de um líquido se encontra presa 
no subsolo entre duas camadas rochosas, conforme o 
esquema. Um pulso acústico (que gera uma vibração 
mecânica) é emitido a partir da superfície do solo, onde 
são posteriormente recebidas duas vibrações refletidas 
(ecos). A primeira corresponde à reflexão do pulso na 
interface superior do líquido com a camada rochosa. 
A segunda vibração deve-se à reflexão do pulso na 
interface inferior. O tempo entre a emissão do pulso e 
a chegada do primeiro eco é de 0,5 s. O segundo eco 
chega 1,1 s após a emissão do pulso. 
Emissor e detector de pulsos 
Rocha 
450 m 
Liquido 
Rocha 
A velocidade do som na camada líquida, em metro por 
segundo, é`,
    images: ['/enem/2023/images/enem_2023_d2_q135.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `270.` },
      { id: 'B', type: 'text', value: `540.` },
      { id: 'C', type: 'text', value: `818.` },
      { id: 'D', type: 'text', value: `1 500.` },
      { id: 'E', type: 'text', value: `1 800.` },
    ],
    correct: 'D',
    explanation: `Pela diferença dos tempos temos:`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 136,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um artista plástico esculpe uma escultura a partir 
de um bloco de madeira de lei, em etapas. Inicialmente, 
esculpe um cone reto com 36 cm de altura e diâmetro da 
base medindo 18 cm. Em seguida, remove desse cone um 
cone menor, cujo diâmetro da base mede 6 cm, obtendo, 
assim, um tronco de cone, conforme ilustrado na figura. 
6 cm 
36 cm 
18 cm 
Em seguida, perfura esse tronco de cone, removendo 
um cilindro reto, de diâmetro 6 cm, cujo eixo de simetria é o 
mesmo do cone original. Dessa forma, ao final, a escultura 
tem a forma de um tronco de cone com uma perfuração 
cilíndrica de base a base. 
O tipo de madeira utilizada para produzir essa escultura 
tem massa igual a 0,6 g por centímetro cúbico de volume. 
Utilize 3 como aproximação para π . 
Qual é a massa, em grama, dessa escultura?`,
    images: ['/enem/2023/images/enem_2023_d2_q136.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1 198,8` },
      { id: 'B', type: 'text', value: `1 296,0` },
      { id: 'C', type: 'text', value: `1 360,8` },
      { id: 'D', type: 'text', value: `4 665,6` },
      { id: 'E', type: 'text', value: `4 860,0` },
    ],
    correct: 'B',
    explanation: `B O volume do cone pode ser calculado pela relação: , em que R é o raio da base maior, r o da base menor e h é a distância entre as duas bases. Dado que as dimensões do cone menor são 18/6 = 3 vezes menor que as do grande, se a altura do cone maior é igual a 36, temos que a altura do cone pequeno é 36/3 ​ = 1 2 c m , o que nos leva a concluir que a altura do tronco (distância entre as bases), é igual a 36 &#8211; 12 = 24 cm. Assim, o volume do tronco, considerando que = 3, é: (9² + 3² + 9 ⋅ 3) = 24 ⋅ 117 = 2.808 c m ​³ ​ ​ . O volume do cilindro é dado pelo produto entre a área da sua base, de raio 3 cm e sua altura, de 24 cm. Logo, seu volume é: π ⋅ 3² ⋅ 24 = 3 ⋅ 3² ⋅ 24 = 648 c m ​² ​ ​ . Logo, o volume da escultura é igual a 2.808 − 648 = 2.160 c m ​² ​ ​ . Se cada centímetro cúbico é igual a 0,6 gramas, a massa da escultura é igual a 0,6 ⋅ 2.160 = 1.296 0 , 6 ⋅ 2 . 1 6 0 = 1 . 2 9 6 gramas.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 137,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Os 100 funcionários de uma empresa estão 
distribuídos em dois setores: Produção e Administração. 
Os funcionários de um mesmo setor recebem salários 
com valores iguais. O quadro apresenta a quantidade de 
funcionários por setor e seus respectivos salários. 
 
A média dos salários dos 100 funcionários dessa 
empresa, em real, é`,
    images: ['/enem/2023/images/enem_2023_d2_q137_1.jpg', '/enem/2023/images/enem_2023_d2_q137_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `2 000,00.` },
      { id: 'B', type: 'text', value: `2 500,00.` },
      { id: 'C', type: 'text', value: `3 250,00.` },
      { id: 'D', type: 'text', value: `4 500,00.` },
      { id: 'E', type: 'text', value: `9 000,00.` },
    ],
    correct: 'C',
    explanation: `C Calculando a média dos salários, em que o salário de R$2.000,00 tem peso 75 e o salário de R$7.000,00 tem peso 25, temos:`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 138,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Visando atrair mais clientes, o gerente de uma loja 
anunciou uma promoção em que cada cliente que realizar 
uma compra pode ganhar um voucher para ser usado 
em sua próxima compra. Para ganhar seu voucher, 
o cliente precisa retirar, ao acaso, uma bolinha de dentro 
de cada uma das duas urnas A e B disponibilizadas pelo 
gerente, nas quais há apenas bolinhas pretas e brancas. 
Atualmente, a probabilidade de se escolher, ao acaso, 
uma bolinha preta na urna A é igual a 20% e a probabilidade 
de se escolher uma bolinha preta na urna B é 25%. 
Ganha o voucher o cliente que retirar duas bolinhas pretas, 
uma de cada urna. 
Com o passar dos dias, o gerente percebeu que, para a 
promoção ser viável aos negócios, era preciso alterar 
a probabilidade de acerto do cliente sem alterar a regra 
da promoção. Para isso, resolveu alterar a quantidade de 
bolinhas brancas na urna B de forma que a probabilidade 
de um cliente ganhar o voucher passasse a ser menor ou 
igual a 1%. Sabe-se que a urna B tem 4 bolinhas pretas e 
que, em ambas as urnas, todas as bolinhas têm a mesma 
probabilidade de serem retiradas. 
Qual é o número mínimo de bolinhas brancas que o 
gerente deve adicionar à urna B?`,
    alternatives: [
      { id: 'A', type: 'text', value: `20` },
      { id: 'B', type: 'text', value: `60` },
      { id: 'C', type: 'text', value: `64` },
      { id: 'D', type: 'text', value: `68` },
      { id: 'E', type: 'text', value: `80` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 139,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O gerente de uma fábrica pretende comparar a evolução das vendas de dois produtos similares (I e II). Para isso, 
passou a verificar o número de unidades vendidas de cada um desses produtos em cada mes. Os resultados dessa 
verificação, para os meses de 
O gerente estava decidido a cessar a produção do produto II no mes seguinte aquele em que as vendas do 
produto I superassem as do produto II. 
Suponha que a variação na quantidade de unidades vendidas dos produtos I e II se manteve, mes a mes, como 
no período representado na tabela. 
Em qual mês o produto II parou de ser produzido?`,
    images: ['/enem/2023/images/enem_2023_d2_q139.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Junho.` },
      { id: 'B', type: 'text', value: `Julho.` },
      { id: 'C', type: 'text', value: `Agosto.` },
      { id: 'D', type: 'text', value: `Setembro.` },
      { id: 'E', type: 'text', value: `Outubro.` },
    ],
    correct: 'D',
    explanation: `A tabela apresenta duas progressões aritméticas, uma para o produto ! e uma para o produto II. A PA do produto I possui razão igual à 10, isso significa que, a cada mês, somamos 10. A PA do produto II possui razão igual à -20, isso significa que, a cada mês, adicionamos -20. produto I: 80, 90, 100, 110, 120, 130, 140, 150, … produto II: 190, 170, 150, 130, 110, 90, 70, … Devemos determinar o mês seguinte ao que a produção do produto I supera a produção do produto II. tomando que o a1 das duas progressões acontece no mês de abril, temos que em agosto, a produção do produto I supera a do produto II. Como queremos o mês seguinte, a resposta correta é a letra D (setembro).`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 140,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Uma empresa de transporte faz regularmente um levantamento do número de viagens realizadas durante o dia 
por todos os 160 motoristas cadastrados em seu aplicativo. Em um certo dia, foi gerado um relatório, por meio de um 
gráfico de barras, no qual se relacionaram a quantidade de motoristas com a quantidade de viagens realizadas até 
aquele instante do dia. 
Quantidade de viagens realizadas 
7 
6 
5 
4 
3 
2 
1 
0 
5 
10 
15 
20 
25 
30 
35 
40 
45 
50 
55 
Quantidade de motoristas 
Comparando os valores da média, da mediana e da moda da distribuição das quantidades de viagens realizadas 
pelos motoristas cadastrados nessa empresa, obtém-se`,
    images: ['/enem/2023/images/enem_2023_d2_q140.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `mediana = média < moda.` },
      { id: 'B', type: 'text', value: `mediana = moda < média.` },
      { id: 'C', type: 'text', value: `mediana < média < moda.` },
      { id: 'D', type: 'text', value: `moda < média < mediana.` },
      { id: 'E', type: 'text', value: `moda < mediana < média.` },
    ],
    correct: 'E',
    explanation: `A moda é dada pelo número de viagens de maior frequência. Pelo gráfico, temos que a moda é igual a 3. A mediana é o valor central, considerando os dados em ordem crescente ou decrescente. Como foram realizadas 160 viagens, a mediana é dada pela média entre as posições 80 e 81. A média das quantidades de viagens é dada por: Portanto, moda &lt; mediana &lt; média`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 141,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `No alojamento de uma universidade, há alguns quartos com o padrão superior ao dos demais. Um desses quartos 
ficou disponível, e muitos estudantes se candidataram para morar no local. Para escolher quem ficará com o quarto, 
um sorteio será realizado. Para esse sorteio, cartões individuais com os nomes de todos os estudantes inscritos serão 
depositados em uma urna, sendo que, para cada estudante de primeiro ano, será depositado um único cartão com 
seu nome; para cada estudante de segundo ano, dois cartões com seu nome; e, para cada estudante de terceiro ano, 
três cartões com seu nome. Foram inscritos 200 estudantes de primeiro ano, 150 de segundo ano e 100 de terceiro 
ano. Todos os cartões têm a mesma probabilidade de serem sorteados. 
Qual a probabilidade de o vencedor do sorteio ser um estudante de terceiro ano?`,
    alternatives: [
      { id: 'A', type: 'text', value: `1 
2` },
      { id: 'B', type: 'text', value: `1 
3` },
      { id: 'C', type: 'text', value: `1 
8` },
      { id: 'D', type: 'text', value: `2 
9` },
      { id: 'E', type: 'text', value: `3 
8` },
    ],
    correct: 'E',
    explanation: `Temos um total de 200 (1 200) tickets do primeiro ano, 300 (2 150) tickets do segundo ano e 300 (3 100) tickets do terceiro ano. Ou seja, há um total de 200 + 300 + 300 = 800 tickets, dos quais 300 são do terceiro ano. Assim, a probabilidade pedida é igual a 300/800 = .`,
    subject: ['mat'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 142,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A água utilizada pelos 75 moradores de um vilarejo provém de um reservatório de formato cilíndrico circular reto 
cujo raio da base mede 5 metros, sempre abastecido no primeiro dia de cada mês por caminhões-pipa. Cada morador 
desse vilarejo consome, em média, 200 litros de água por dia. 
No mês de junho de um determinado ano, o vilarejo festejou o dia do seu padroeiro e houve um gasto extra de água 
nos primeiros 20 dias. Passado esse período, as pessoas verificaram a quantidade de água presente no reservatório 
e constataram que o nível da coluna de água estava em 1,5 metro. Decidiram, então, fazer um racionamento de água 
durante os 10 dias seguintes. Considere 3 como aproximação para p . 
Qual é a quantidade mínima de água, em litro, que cada morador, em média, deverá economizar por dia, de modo 
que o reservatório não fique sem água nos próximos 10 dias?`,
    alternatives: [
      { id: 'A', type: 'text', value: `50` },
      { id: 'B', type: 'text', value: `60` },
      { id: 'C', type: 'text', value: `80` },
      { id: 'D', type: 'text', value: `140` },
      { id: 'E', type: 'text', value: `150` },
    ],
    correct: 'A',
    explanation: `O volume de água restante é calculado pelo volume de um cilindro de 5m de raio e 1,5m de altura. Isto é, r² h = 3 5² 1,5 = 112,5m³ = 112,5 1000 = 112500L . Para dividir essa água por 75 pessoas e por 10 dias, temos que cada morador poderá consumir, por dia: 112500 : 750 = 150L por dia. Ou seja, uma economia de 50 litros por dia.`,
    subject: ['mat'],
    topics: ['Histologia básica (tecidos – leitura de figura)', 'Questões aleatórias'],
  },
  {
    id: 143,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Em janeiro do ano passado, a direção de uma fábrica abriu uma creche para os filhos de seus funcionários, com 
10 salas, cada uma com capacidade para atender 10 crianças a cada ano. As vagas são sorteadas entre os filhos 
dos funcionários inscritos, enquanto os não contemplados pelo sorteio formam uma lista de espera. No ano passado, 
a lista de espera teve 400 nomes e, neste ano, esse número cresceu 10%. 
A direção da fábrica realizou uma pesquisa e constatou que a lista de espera para o próximo ano terá a mesma 
quantidade de nomes da lista de espera deste ano. Decidiu, então, construir, ao longo desse ano, novas salas para 
a creche, também com capacidade de atendimento para 10 crianças cada, de modo que o número de nomes na lista 
de espera no próximo ano seja 25% menor que o deste ano. 
O número mínimo de salas que deverão ser construídas é`,
    alternatives: [
      { id: 'A', type: 'text', value: `10.` },
      { id: 'B', type: 'text', value: `11.` },
      { id: 'C', type: 'text', value: `13.` },
      { id: 'D', type: 'text', value: `30.` },
      { id: 'E', type: 'text', value: `33.` },
    ],
    correct: 'B',
    explanation: `A creche comporta 10 10=100 bebês por ano. Se a lista de espera, neste ano, é de 400 1,1=440 bebês, foram inscritos 100 + 440 = 540 bebês, ao todo, neste ano. No ano que vem, está previsto que teremos 440 0,75=330 bebês na lista de espera. Isso significa que teremos, inscritos e com vaga garantida na creche, 540-330=210 bebês, o que demandaria um total de 210:10=21 salas. Como já temos 10 salas, devem ser construídas 21-10=11 salas.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 144,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A foto mostra a construção de uma cisterna destinada 
ao armazenamento de água. Uma cisterna como essa, na 
forma de cilindro circular reto com 3 m² de área da base, 
foi abastecida por um curso-d’água com vazão constante. 
O seu proprietário registrou a altura do nível da água no 
interior da cisterna durante o abastecimento em diferentes 
momentos de um mesmo dia, conforme o quadro. 
Horário (h) 
Nível da água (m) 
6:00 
0,5 
8:00 
1,1 
12:00 
2,3 
15:00 
3,2 
Disponível em: www.paraibamix.com. Acesso em: 3 dez. 2012. 
Qual foi a vazão, em metro cúbico por hora, do 
curso-d’água que abasteceu a cisterna?`,
    images: ['/enem/2023/images/enem_2023_d2_q144_1.jpg', '/enem/2023/images/enem_2023_d2_q144_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0,3` },
      { id: 'B', type: 'text', value: `0,5` },
      { id: 'C', type: 'text', value: `0,9` },
      { id: 'D', type: 'text', value: `1,8` },
      { id: 'E', type: 'text', value: `2,7` },
    ],
    correct: 'C',
    explanation: `Em uma variação de 2 horas, o nível da água aumentou 1,1 &#8211; 0,5 = 0,6 m. Como a área da base do cilindro é igual a 3 m², o volume de água (em forma de cilindro) é igual a 3 0,6=1,8 m³ em duas horas. Ou seja, a vazão é de 0,9 m³ por hora.`,
    subject: ['mat'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 145,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Num certo momento de um jogo digital, a tela 
apresenta a imagem representada na figura. O ponto Q 1 
representa a posição de um jogador que está com a bola, 
os pontos Q 2 , Q 3 , Q 4 , Q 5 e Q 6 também indicam posições 
de jogadores da mesma equipe, e os pontos A e B indicam 
os dois pés da trave mais próxima deles. No momento da 
partida retratado, o jogador Q 1 tem a posse da bola, que 
será passada para um dos outros jogadores das posições 
Q n , n ∈ {2, 3, 4, 5, 6}, cujo ângulo AQ B 
n 
 tenha a mesma 
medida do ângulo 
AQ B 
1 . 
Q 3 
A 
Q 2 
Q 4 
Q 5 
α 
B 
Q 1 
Q 6 
Qual é o jogador que receberá a bola?`,
    images: ['/enem/2023/images/enem_2023_d2_q145.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Q 2` },
      { id: 'B', type: 'text', value: `Q 3` },
      { id: 'C', type: 'text', value: `Q 4` },
      { id: 'D', type: 'text', value: `Q 5` },
      { id: 'E', type: 'text', value: `Q 6` },
    ],
    correct: 'B',
    explanation: `Temos que lembrar da propriedade de que dois ângulos inscritos a um mesmo arco possuem mesma medida, como mostrado abaixo:`,
    subject: ['mat'],
    topics: ['História Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 146,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O triângulo da figura é denominado triângulo mágico. 
Nos círculos, escrevem-se os números de 1 a 6, sem 
repetição, com um número em cada círculo. O objetivo 
é distribuir os números de forma que as somas dos 
números em cada lado do triângulo sejam iguais. 
Considere que os números colocados nos vértices 
do triângulo estejam em progressão aritmética de razão 
igual a 2. 
Nas condições propostas, quais as possíveis soluções 
para as somas dos números que formam os lados do 
triângulo?`,
    images: ['/enem/2023/images/enem_2023_d2_q146.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Há somente uma solução possível, e as somas em 
cada lado do triângulo são iguais a 7.` },
      { id: 'B', type: 'text', value: `Há somente uma solução possível, e as somas em 
cada lado do triângulo são iguais a 9.` },
      { id: 'C', type: 'text', value: `Há somente duas soluções possíveis, uma em que 
as somas em cada lado do triângulo são iguais a 7 e 
outra em que as somas são iguais a 9.` },
      { id: 'D', type: 'text', value: `Há somente duas soluções possíveis, uma em que 
as somas em cada lado do triângulo são iguais a 9 e 
outra em que as somas são iguais a 12.` },
      { id: 'E', type: 'text', value: `Há somente duas soluções possíveis, uma em que 
as somas em cada lado do triângulo são iguais a 10 
e outra em que as somas são iguais a 11.` },
    ],
    correct: 'E',
    explanation: `Como os vértices estão numa progressão de razão 2, eles podem ser 1, 3 e 5 ou 2, 4 e 6, as duas respostas possíveis estão ilustradas abaixo, em que cada linha temos soma 10 ou 11.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 147,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Alguns estudos comprovam que os carboidratos 
fornecem energia ao corpo, preservam as proteínas 
estruturais dos músculos durante a prática de atividade 
física e ainda dão força para o cérebro coordenar os 
movimentos, o que de fato tem impacto positivo no 
desenvolvimento do praticante. O ideal é consumir 1 grama 
de carboidrato para cada minuto de caminhada. 
CIRINO, C. Boa pergunta: consumir carboidratos antes dos exercícios melhora o 
desempenho do atleta? Revista Saúde! É Vital , n. 330, nov. 2010 (adaptado). 
Um casal realizará diariamente 30 minutos de 
caminhada, ingerindo, antes dessa atividade, a quantidade 
ideal de carboidratos recomendada. Para ter o consumo ideal 
apenas por meio do consumo de pão de fôrma integral, o 
casal planeja garantir o suprimento de pães para um período 
de 30 dias ininterruptos. Sabe-se que cada pacote desse pão 
vem com 18 fatias, e que cada uma delas tem 15 gramas 
de carboidratos. 
A quantidade mínima de pacotes de pão de fôrma 
necessários para prover o suprimento a esse casal é`,
    alternatives: [
      { id: 'A', type: 'text', value: `1.` },
      { id: 'B', type: 'text', value: `4.` },
      { id: 'C', type: 'text', value: `6.` },
      { id: 'D', type: 'text', value: `7.` },
      { id: 'E', type: 'text', value: `8.` },
    ],
    correct: 'D',
    explanation: `Para realização de 30 minutos de caminhada, cada indivíduo deve consumir 30 g de carboidratos. Logo, o casal necessita consumir 30 . 2=60 g de carboidratos por dia. Por um período de 30 dias, a quantidade de carboidratos que deverá ser adquirido será igual a 60 . 30 = 1800 g . Cada pacote de pão fornece 18 . 15 = 270 g de carboidratos. 1800/ 270 = 6, 6 Ou seja, serão necessários 7 pacotes de pão de forma.`,
    subject: ['mat'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 148,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O mastro de uma bandeira foi instalado 
perpendicularmente ao solo em uma região plana. 
Devido aos fortes ventos, três cabos de aço, de mesmo 
comprimento, serão instalados para dar sustentação ao 
mastro. Cada cabo de aço ficará perfeitamente esticado, 
com uma extremidade num ponto P do mastro, a uma 
altura h do solo, e a outra extremidade, num ponto no 
chão, como mostra a figura. 
P 
h 
α 
α 
α 
Os cabos de aço formam um ângulo a com o plano 
do chão. 
Por medida de segurança, há apenas três opções de 
instalação: 
• opção I: h = 11 m e a = 30° 
• opção II: h = 12 m e a = 45° 
• opção III: h = 18 m e a = 60° 
A opção a ser escolhida é aquela em que a medida 
dos cabos seja a menor possível. 
Qual será a medida, em metro, de cada um dos cabos a 
serem instalados?`,
    images: ['/enem/2023/images/enem_2023_d2_q148.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `22 3 
3` },
      { id: 'B', type: 'text', value: `11 2` },
      { id: 'C', type: 'text', value: `12 2` },
      { id: 'D', type: 'text', value: `12 3` },
      { id: 'E', type: 'text', value: `22` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['mat'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 149,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um controlador de voo dispõe de um instrumento que 
descreve a altitude de uma aeronave em voo, em função 
da distância em solo. Essa distância em solo é a medida na 
horizontal entre o ponto de origem do voo até o ponto que 
representa a projeção ortogonal da posição da aeronave, 
em voo, no solo. Essas duas grandezas são dadas numa 
mesma unidade de medida. 
A tela do instrumento representa proporcionalmente 
as dimensões reais das distâncias associadas ao voo. 
A figura apresenta a tela do instrumento depois de 
concluída a viagem de um avião, sendo a medida do lado 
de cada quadradinho da malha igual a 1 cm. 
Altitude
Origem
do voo
Destino
Distância 
Essa tela apresenta os dados de um voo cuja maior 
altitude alcançada foi de 5 km. 
A escala em que essa tela representa as medidas reais é`,
    images: ['/enem/2023/images/enem_2023_d2_q149.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1 : 5.` },
      { id: 'B', type: 'text', value: `1 : 11.` },
      { id: 'C', type: 'text', value: `1 : 55.` },
      { id: 'D', type: 'text', value: `1 : 5 000.` },
      { id: 'E', type: 'text', value: `1 : 500 000.` },
    ],
    correct: 'E',
    explanation: `O enunciado sugere que a altitude máxima alcançada foi de 5 km=500 000 cm . No gráfico, essa altitude está representada por um segmento de 1 cm . Sabendo que a escala compara, através de uma razão, um comprimento fictício com um comprimento real, podemos concluir que:`,
    subject: ['mat'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 150,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Dirigir após ingerir bebidas alcoólicas é uma atitude 
extremamente perigosa, uma vez que, a partir da primeira 
dose, a pessoa já começa a ter perda de sensibilidade 
de movimentos e de reflexos. Apesar de a eliminação e 
absorção do álcool depender de cada pessoa e de como 
o organismo consegue metabolizar a substância, ao final 
da primeira hora após a ingestão, a concentração de álcool 
( C ) no sangue corresponde a aproximadamente 90% da 
quantidade ( q ) de álcool ingerida, e a eliminação total 
dessa concentração pode demorar até 12 horas. 
Disponível em: http://g1.globo.com. Acesso em: 1 dez. 2018 (adaptado). 
Nessas condições, ao final da primeira hora após a ingestão 
da quantidade q de álcool, a concentração C dessa 
substância no sangue é expressa algebricamente por`,
    alternatives: [
      { id: 'A', type: 'text', value: `C = 0,9 q` },
      { id: 'B', type: 'text', value: `C = 0,1 q 
C 
C` },
      { id: 'C', type: 'text', value: `= 1 − 0,1 q` },
      { id: 'D', type: 'text', value: `C = 1 − 0,9 q` },
      { id: 'E', type: 'text', value: `C = q − 10` },
    ],
    correct: 'A',
    explanation: `A É desejado 90% da concentração inicial q. Isto é, C = 0,9q.`,
    subject: ['mat'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 151,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um investidor iniciante observou o gráfico que 
apresenta a evolução dos valores de duas criptomoedas 
A e B em relação ao tempo. 
Criptomoeda B 
(milhar de real) 
Criptomoeda A 
(milhar de real) 
Durante horas consecutivas, esses valores foram 
observados em nove instantes, representados por horas 
exatas. 
Em quantos desses instantes a criptomoeda A estava 
mais valorizada do que a criptomoeda B?`,
    images: ['/enem/2023/images/enem_2023_d2_q151.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `3` },
      { id: 'B', type: 'text', value: `4` },
      { id: 'C', type: 'text', value: `6` },
      { id: 'D', type: 'text', value: `7` },
      { id: 'E', type: 'text', value: `9` },
    ],
    correct: 'B',
    explanation: `B Queremos os momentos em que A é maior que B. Isso pode ser feito de duas formas: verificando ponto a ponto, ou traçando uma reta diagonal que divide o gráfico ao meio e vendo os pontos do lado direito (mais próximos de A).`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 152,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A exposição a alguns níveis sonoros pode causar 
lesões auditivas. Por isso, em uma indústria, são adotadas 
medidas preventivas de acordo com a máquina que o 
funcionário opera e o nível N de intensidade do som, 
medido em decibel (dB), a que o operário é exposto, 
sendo N = log 10 I  10 − log 10 I 10 
0 , I a intensidade do som e 
I 0 = 10 − 12 W/m² . 
Disponível em: www.sofisica.com.br. Acesso em: 8 jul. 2015 (adaptado). 
Quando o som é considerado baixo, ou seja, 
N = 48 dB ou menos, deve ser utilizada a medida 
preventiva I. No caso de o som ser moderado, quando 
N está no intervalo (48 dB, 55 dB), deve ser utilizada a 
medida preventiva II. Quando o som é moderado alto, 
que equivale a N no intervalo (55 dB, 80 dB), a medida 
preventiva a ser usada é a III. Se N estiver no intervalo 
(80 dB, 115 dB), quando o som é considerado alto, deve ser 
utilizada a medida preventiva IV. E se o som é considerado 
muito alto, com N maior que 115 dB, deve-se utilizar a 
medida preventiva V. 
Uma nova máquina, com I = 8 × 10 − 8 W/m² , foi adquirida 
e será classificada de acordo com o nível de ruído 
que produz. 
Considere 0,3 como aproximação para log 10 2. 
O funcionário que operará a nova máquina deverá adotar 
a medida preventiva`,
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },
    ],
    correct: 'B',
    explanation: `B`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 153,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um supermercado conta com cinco caixas disponíveis 
para pagamento. Foram instaladas telas que apresentam 
o tempo médio gasto por cada caixa para iniciar e finalizar o 
atendimento de cada cliente, e o número de pessoas 
presentes na fila de cada caixa em tempo real. Um cliente, 
na hora de passar sua compra, sabendo que cada um 
dos cinco caixas iniciará um novo atendimento naquele 
momento, pretende gastar o menor tempo possível de 
espera na fila. Ele observa que as telas apresentavam as 
informações a seguir. 
• Caixa I: atendimento 12 minutos, 5 pessoas na fila. 
• Caixa II: atendimento 6 minutos, 9 pessoas na fila. 
• Caixa III: atendimento 5 minutos, 6 pessoas na fila. 
• Caixa IV: atendimento 15 minutos, 2 pessoas na fila. 
• Caixa V: atendimento 9 minutos, 3 pessoas na fila. 
Para alcançar seu objetivo, o cliente deverá escolher o caixa`,
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },
    ],
    correct: 'E',
    explanation: `E Devemos multiplicar o número de pessoas na fila pelo tempo médio de atendimento para saber em qual caixa o cliente será atendido mais rápido. Caixa I: 12 ⋅ ⋅ 5 = 60 Caixa II: 6 ⋅ ⋅ 9 = 54 Caixa III: 5 ⋅ ⋅ 6 = 30 Caixa IV: 15 ⋅ ⋅ 2 = 30 Caixa I: 9 ⋅ ⋅ 3 = 27 Logo, o cliente deve escolher o caixa V.`,
    subject: ['mat'],
    topics: ['Trabalho e economia', 'Questões aleatórias'],
  },
  {
    id: 154,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `As figuras pintadas no quadro da sala de estar de 
uma residência representam as silhuetas de parte das 
torres de um castelo e, ao fundo, a de uma lua cheia. 
A lua foi pintada na forma de um círculo, e o telhado da 
torre mais alta, na forma de triângulo equilátero, foi pintado 
sobrepondo parte da lua. O centro da lua coincide com um 
dos vértices do telhado da torre mais alta. 
Nesse quadro, a parte da lua escondida atrás da torre 
mais alta do castelo pode ser representada por um`,
    images: ['/enem/2023/images/enem_2023_d2_q154.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `cone.` },
      { id: 'B', type: 'text', value: `setor circular.` },
      { id: 'C', type: 'text', value: `segmento circular.` },
      { id: 'D', type: 'text', value: `triângulo isósceles.` },
      { id: 'E', type: 'text', value: `arco de circunferência.` },
    ],
    correct: 'B',
    explanation: `B Como o vértice do triângulo coincide com o centro do círculo, a região escondida corresponde a um setor circular.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 155,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Na planta baixa de um clube, a piscina é representada 
por um quadrado cuja área real mede 400 m². Ao redor 
dessa piscina, será construída uma calçada, de largura 
constante igual a 5 m. 
5 m 
Calçada 
5 m 
Piscina 
5 m 
5 m 
Qual é a medida da área, em metro quadrado, ocupada 
pela calçada?`,
    images: ['/enem/2023/images/enem_2023_d2_q155.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1 000` },
      { id: 'B', type: 'text', value: `900` },
      { id: 'C', type: 'text', value: `600` },
      { id: 'D', type: 'text', value: `500` },
      { id: 'E', type: 'text', value: `400` },
    ],
    correct: 'D',
    explanation: `D Como a área da piscina é 400m², podemos encontrar o lado: l² = 400 l = 20 Sabendo que o lado da piscina mede 20m, devemos acrescentar 5m de cada lado para obter o lado do quadrado maior (piscina + calçada). Dessa forma, temos que o lado do quadrado maior mede 30m. Calculando sua área temos: Área total ​ ​ = 3 0 ​² ​ ​ = 9 0 0 Para obter a área da calçada, podemos excluir a área da piscina da área total: Área da ​ c a l ç a d a ​ ​ = Área total ​ ​ &#8211; Área da ​ p i s c i n a ​ ​ Área da ​ c a l ç a d a ​​ = 900 &#8211; 400 Área da ​ c a l ç a d a ​​ = 500m²`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 156,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Uma pessoa caminha por 30 minutos e utiliza um 
aplicativo instalado em seu celular para monitorar a 
variação da intensidade do sinal de internet recebido 
pelo aparelho durante o deslocamento. Chegando ao seu 
destino, o aplicativo forneceu este gráfico: 
Intensidade do sinal de internet 
Tempo (min) 
0 
2 
4 
6 
8 
10 12 14 
16 
18 20 
22 24 
26 28 30 
Por quantos minutos, durante essa caminhada, o celular 
dessa pessoa ficou sem receber sinal de internet?`,
    images: ['/enem/2023/images/enem_2023_d2_q156.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `6` },
      { id: 'B', type: 'text', value: `8` },
      { id: 'C', type: 'text', value: `10` },
      { id: 'D', type: 'text', value: `14` },
      { id: 'E', type: 'text', value: `24` },
    ],
    correct: 'A',
    explanation: `A Observando o gráfico, temos que, nos intervalos de 10 a 12 min e 16 a 20 min, a intensidade do sinal de internet é zero. Podemos então dizer que, nesses intervalos, o celular da pessoa ficou sem sinal. Somando o tempo dos dois intervalos, temos que a pessoa ficou sem receber sinal de internet por 6 minutos.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 157,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um professor, para promover a aprendizagem dos 
estudantes em estatística, propôs uma atividade. O objetivo 
era verificar o percentual de estudantes com massa corporal 
abaixo da média e altura acima da média de um grupo de 
estudantes. Para isso, usando uma balança e uma fita 
métrica, avaliou uma amostra de dez estudantes, anotando as 
medidas observadas. O gráfico apresenta a massa corporal, 
em quilograma, e a altura, em metro, obtidas na atividade. 
Massa corporal e altura de estudantes 
Altura (m) 
1,8 
1,75 
1,7 
1,65 
1,6 
1,55 
1,5 
1,45 
20 
40 
60 
80 
100 
120 
140 
Massa corporal (kg) 
0 
Após a coleta dos dados, os estudantes calcularam a 
média dos valores obtidos, referentes à massa corporal e 
à altura, obtendo, respectivamente, 80 kg e 1,65 m. 
Qual é o percentual de estudantes dessa amostra com 
massa corporal abaixo da média e altura acima da média?`,
    images: ['/enem/2023/images/enem_2023_d2_q157.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `10` },
      { id: 'B', type: 'text', value: `20` },
      { id: 'C', type: 'text', value: `30` },
      { id: 'D', type: 'text', value: `50` },
      { id: 'E', type: 'text', value: `70` },
    ],
    correct: 'B',
    explanation: `Traçando uma linha horizontal na altura de 1,65 m de altura e uma vertical na altura de 80 kg, podemos identificar o que é pedido no segundo quadrante (menor que 80 kg e maior que 1,65 m). &nbsp; Ou seja, dois dentre os 10 alunos atendem às condições oferecidas, isto é 2/10 = 20%.`,
    subject: ['mat'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 158,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um pescador tem um custo fixo diário de R$ 900,00 
com combustível, iscas, manutenção de seu barco e outras 
pequenas despesas. Ele vende cada quilograma de peixe por 
R$ 5,00. Sua meta é obter um lucro mínimo de R$ 800,00 
por dia. Sozinho, ele consegue, ao final de um dia de trabalho, 
pescar 180 kg de peixe, o que é suficiente apenas para cobrir o 
custo fixo diário. Portanto, precisa contratar ajudantes, pagando 
para cada um R$ 250,00 por dia de trabalho. Além desse valor, 
4% da receita obtida pela venda de peixe é repartida igualmente 
entre os ajudantes. Considerando o tamanho de seu barco, ele 
pode contratar até 5 ajudantes. Ele sabe que com um ajudante 
a pesca diária é de 300 kg e que, a partir do segundo 
ajudante contratado, aumenta-se em 100 kg a quantidade de 
peixe pescada por ajudante em um dia de trabalho. 
A quantidade mínima de ajudantes que esse pescador 
precisa contratar para conseguir o lucro diário pretendido é`,
    alternatives: [
      { id: 'A', type: 'text', value: `1.` },
      { id: 'B', type: 'text', value: `2.` },
      { id: 'C', type: 'text', value: `3.` },
      { id: 'D', type: 'text', value: `4.` },
      { id: 'E', type: 'text', value: `5.` },
    ],
    correct: 'D',
    explanation: `O pescador deseja ter lucro de, no mínimo, R$800,00. A questão informa que cada kg de peixe é vendido por R$5,00, o custo diário é de R$900,00, ele irá pagar R$250,00 para cada ajudante e ele irá tirar 4% da receita para dividir entre os ajudantes. Vamos calcular quantos ajudantes são necessários para se obter o lucro desejado: 1 ajudante: pesca total: 300kg (informado no enunciado) receita: 5 ∙ 300 = R$1500,00 Subtraindo o pagamento do ajudante, o percentual e o custo diário temos: 1500 – 250 – 0,04 ∙ 1500 – 900 = 290 (não obteve o lucro desejado) &nbsp; 2 ajudantes: pesca total: 400kg (300 que ele pescou junto com o primeiro + 100 do segundo) receita: 5 ∙ 400 = R$2000,00 Subtraindo o pagamento dos ajudantes, o percentual e o custo diário, temos: 2000 – 2 ∙ 250 – 0,04 ∙ 2000 – 900 = 520 (não obteve o lucro desejado) &nbsp; 3 ajudantes: pesca total: 500kg (300 que ele pescou com o primeiro ajudante + 100 do segundo + 100 do terceiro) receita: 5 ∙ 500 = R$2500,00 subtraindo o pagamento dos ajudantes, o percentual e o custo diário, temos: 2500 – 3 ∙ 250 – 0,04 ∙ 2500 – 900 = 550 (não obteve o lucro desejado) &nbsp; 4 ajudantes: pesca total: 600kg (300 que ele pescou com o primeiro ajudante + 100 do segundo + 100 do terceiro + 100 do quarto) receita: 5 ∙ 600 = R$3000,00 subtraindo o pagamento dos ajudantes, o percentual e o custo diário, temos: 3000 – 4 ∙ 250 – 0,04 ∙ 3000 – 900 = 980 (obteve o lucro desejado) &nbsp; Portanto, o pescador precisa contratar 4 ajudantes para obter o lucro diário pretendido. Alternativa: D`,
    subject: ['mat'],
    topics: ['História Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 159,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um agricultor é informado sobre um método de proteção 
para sua lavoura que consiste em inserir larvas específicas, 
de rápida reprodução. A reprodução dessas larvas faz com 
que sua população multiplique-se por 10 a cada 3 dias e, 
para evitar eventuais desequilíbrios, é possível cessar essa 
reprodução aplicando-se um produto X. O agricultor decide 
iniciar esse método com 100 larvas e dispõe de 5 litros do 
produto X, cuja aplicação recomendada é de exatamente 
1 litro para cada população de 200 000 larvas. A quantidade 
total do produto X de que ele dispõe deverá ser aplicada 
de uma única vez. 
Quantos dias após iniciado esse método o agricultor 
deverá aplicar o produto X?`,
    alternatives: [
      { id: 'A', type: 'text', value: `2` },
      { id: 'B', type: 'text', value: `4` },
      { id: 'C', type: 'text', value: `6` },
      { id: 'D', type: 'text', value: `12` },
      { id: 'E', type: 'text', value: `18` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 160,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Ao realizar o cadastro em um aplicativo de investimentos, 
foi solicitado ao usuário que criasse uma senha, sendo 
permitido o uso somente dos seguintes caracteres: 
• algarismos de 0 a 9; 
• 26 letras minúsculas do alfabeto; 
• 26 letras maiúsculas do alfabeto; 
• 6 caracteres especiais !, @, #, $, , &. 
Três tipos de estruturas para senha foram apresentadas 
ao usuário: 
• tipo I: formada por quaisquer quatro caracteres 
distintos, escolhidos dentre os permitidos; 
• tipo II: formada por cinco caracteres distintos, 
iniciando por três letras, seguidas por um algarismo 
e, ao final, um caractere especial; 
• tipo III: formada por seis caracteres distintos, iniciando 
por duas letras, seguidas por dois algarismos e, ao 
final, dois caracteres especiais. 
Considere p 1 , p 2 e p 3 as probabilidades de se 
descobrirem ao acaso, na primeira tentativa, as senhas 
dos tipos I, II e III, respectivamente. 
Nessas condições, o tipo de senha que apresenta a 
menor probabilidade de ser descoberta ao acaso, na 
primeira tentativa, é o`,
    alternatives: [
      { id: 'A', type: 'text', value: `tipo I, pois p 1 < p 2 < p 3 .` },
      { id: 'B', type: 'text', value: `tipo I, pois tem menor quantidade de caracteres.` },
      { id: 'C', type: 'text', value: `tipo II, pois tem maior quantidade de letras.` },
      { id: 'D', type: 'text', value: `tipo III, pois p 3 < p 2 < p 1 .` },
      { id: 'E', type: 'text', value: `tipo III, pois tem maior quantidade de caracteres.` },
    ],
    correct: 'A',
    explanation: `Temos, no primeiro tipo, um total de 68 . 67 . 66 . 65 opções. No segundo tipo, um total de 52 . 51 . 50 . 10 . 6 =52 . 51 . 50 . 60 opções. No terceiro tipo, um total de 52 . 51 . 10 . 9 . 6 . 5 = 52 . 51 . 54 . 60 opções. Montando essas contas, percebemos que o tipo I tem mais senhas, o tipo II menos e o tipo III menos ainda. Logo, a probabilidade de acerto é menor no tipo I, maior no tipo II e maior ainda no tipo III. &nbsp;`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 161,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Uma loja vende seus produtos de duas formas: 
à vista ou financiado em três parcelas mensais iguais. 
Para definir o valor dessas parcelas nas vendas 
financiadas, a loja aumenta em 20% o valor do produto 
à vista e divide esse novo valor por 3. A primeira parcela 
deve ser paga no ato da compra, e as duas últimas, 
em 30 e 60 dias após a compra. 
Um cliente da loja decidiu comprar, de forma financiada, 
um produto cujo valor à vista é R$ 1 500,00. 
Utilize 5,29 como aproximação para 
28 . 
A taxa mensal de juros compostos praticada nesse 
financiamento é de`,
    alternatives: [
      { id: 'A', type: 'text', value: `6,7%` },
      { id: 'B', type: 'text', value: `10%` },
      { id: 'C', type: 'text', value: `20%` },
      { id: 'D', type: 'text', value: `21,5%` },
      { id: 'E', type: 'text', value: `23,3%` },
    ],
    correct: 'D',
    explanation: `D Tomando um aumento de 20%, temos que o preço do produto será 1500 + 0,2 ⋅ ⋅ 1.500 = R$ 1.800,00. Logo, cada parcela custará 1.800 ÷ 3 = R$ 600,00. Como aplicamos um fator multiplicativo de “1 + i” para passar de um mês para o outro, podemos “voltar no tempo” fazendo divisões por 1 + i, deixando todas no momento à vista. Isto é: Primeira parcela: R$ 600,00 Segunda parcela: 600/ 1 + i ​ ​ Terceira parcela: 600/( 1 + i)² ​ ​ Total das três parcelas: 600 + 600/ 1 + i + 600/( 1 + i)² ​ ​ Como o preço é R$ 1.800,00 à vista, podemos escrever a seguinte equação: 600 + 600/ 1 + i + 600/( 1 + i)² ​ = 1 . 5 0 0 Substituindo 1 + i por x, temos: 600 + 600/ 1 + i + 600/( 1 + i)² ​ = 1 . 5 0 0 600x² + 600x + 600 = 1.500x² ​ ​ ​ 1.500x² &#8211; 600x² + 600x = 0 900x² &#8211; 600x − 600 = 0 Simplificando a equação por 300: 3² &#8211; 2x &#8211; 2 = 0 Resolvendo essa equação pela fórmula de Bhaskara, seguimos que: ​ ​ Como x deve ser um valor positivo, (já que se trata de aumento de percentual, e não decréscimo), temos que: Portanto, x = 1 + i = 1,215 → i = 0,215. Isso significa dizer que a taxa de juros era de 21,5% ao mês.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 162,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Para concretar a laje de sua residência, uma pessoa 
contratou uma construtora. Tal empresa informa que o 
preço y do concreto bombeado é composto de duas 
partes: uma fixa, chamada de taxa de bombeamento, 
e uma variável, que depende do volume x de concreto 
utilizado. Sabe-se que a taxa de bombeamento custa 
R$ 500,00 e que o metro cúbico do concreto bombeado 
é de R$ 250,00. 
A expressão que representa o preço y em função do 
volume x , em metro cúbico, é`,
    alternatives: [
      { id: 'A', type: 'text', value: `y = 250 x` },
      { id: 'B', type: 'text', value: `y = 500 x` },
      { id: 'C', type: 'text', value: `y = 750 x` },
      { id: 'D', type: 'text', value: `y = 250 x + 500` },
      { id: 'E', type: 'text', value: `y = 500 x + 250` },
    ],
    correct: 'D',
    explanation: `D O preço y está em função do volume x de concreto, em metros cúbicos. Sabendo que existe uma taxa fixa de bombeamento que custa R$ 500,00 e que o m³ de concreto custa R$ 250,00, podemos escrever a função da seguinte forma: y = 250x + 500`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 163,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Uma empresa de segurança domiciliar oferece o serviço 
de patrulha noturna, no qual vigilantes em motocicletas 
fazem o monitoramento periódico de residências. 
A empresa conta com uma base, de onde acompanha 
o trajeto realizado pelos vigilantes durante as patrulhas 
e orienta o deslocamento de equipes de reforço quando 
necessário. Numa patrulha rotineira, sem ocorrências, 
um vigilante conduziu sua motocicleta a uma velocidade 
constante durante todo o itinerário estabelecido, levando 
30 minutos para conclusão. De acordo com os registros 
do GPS alocado na motocicleta, a distância da posição 
do vigilante à base, ao longo do tempo de realização do 
trajeto, é descrita pelo gráfico. 
Distância do vigilante em relação 
à base em função do tempo 
4
Distância do vigilante
à base (km)
3 
2 
1 
Tempo (min) 
0 
10 
20 
30 
A vista superior da trajetória realizada pelo vigilante 
durante a patrulha registrada no gráfico é descrita pela 
representação`,
    images: ['/enem/2023/images/enem_2023_d2_q163.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'A',
    explanation: `A Temos que a distância deve ir aumentando, até chegar a 3 km de distância da base nos 10 primeiros minutos, o que é representado por um segmento de reta. Porém, nos próximos 10 minutos, a distância deve se manter em 3 km, o que é representado por um arco circular, dado que todos seus pontos distam 3 km do centro do arco. Por fim, devemos retornar com um segmento de reta até a base. Note que a parte curva não pode ser maior que as partes retas, dado que o tempo gasto em cada parte é o mesmo. Logo, isso elimina a letra E, nos deixando apenas com a letra A como opção.`,
    subject: ['mat'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 164,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O gráfico expõe alguns números da gripe A-H1N1. Entre as categorias que estão em processo de imunização, 
uma já está completamente imunizada, a dos trabalhadores da saúde. 
Números da campanha contra a gripe A-H1N1 
Adultos entre 20 e 29 anos 
Gestantes 
Doentes crônicos 
Indígenas 
Crianças de 6 meses a 2 anos 
Trabalhadores da saúde 
0,0% 
10,0% 20,0% 
30,0% 40,0% 50,0% 60,0% 70,0% 80,0% 90,0% 100,0% 
De acordo com o gráfico, entre as demais categorias, a que esta mais exposta ao vírus da gripe A-H1N1 e a 
categoria de`,
    images: ['/enem/2023/images/enem_2023_d2_q164.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `indígenas.` },
      { id: 'B', type: 'text', value: `gestantes.` },
      { id: 'C', type: 'text', value: `doentes crônicos.` },
      { id: 'D', type: 'text', value: `adultos entre 20 e 29 anos.` },
      { id: 'E', type: 'text', value: `crianças de 6 meses a 2 anos.` },
    ],
    correct: 'A',
    annulled: true,
    explanation: `Questão anulada Devemos observar aquele grupo cujo percentual de vacinação é o menor. Logo, são os adultos entre 20 e 29 anos, com aproximadamente 42%.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 165,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A figura representa uma escada com três degraus, construída em concreto macico, com suas medidas especificadas. 
Nessa escada, pisos e espelhos têm formato retangular, e as paredes laterais tem formato de um polígono cujos 
lados adjacentes são perpendiculares. Pisos, espelhos e paredes laterais serão revestidos em cerâmica. 
A área a ser revestida em cerâmica, em metro quadrado, mede`,
    images: ['/enem/2023/images/enem_2023_d2_q165.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1,20.` },
      { id: 'B', type: 'text', value: `1,35.` },
      { id: 'C', type: 'text', value: `1,65.` },
      { id: 'D', type: 'text', value: `1,80.` },
      { id: 'E', type: 'text', value: `1,95. 
Época , 26 abr. 2010 (adaptado).` },
    ],
    correct: 'E',
    explanation: `E A área de cada piso é dada por 0,25 ⋅ ⋅ 1 = 0,25 m². Como temos três pisos, eles ocupam 3 ⋅ ⋅ 0,25 = 0,75 m². A área de cada espelho é dada por 0,2 ⋅ ⋅ 1 = 0,2 m². Como temos três espelhos, eles ocupam 3 ⋅ ⋅ 0,2 = 0,6 m². A área de cada lateral pode ser decomposta em três retângulos de dimensões 0,25 x 0,6, 0,25 x 0,4 e 0,25 x 0,2. Assim, a área de cada lateral é dada por 0,25 x 0,6 + 0,25 x 0,4 + 0,25 x 0,2 = 0,15 + 0,1 + 0,05 = 0,3. Como são duas laterais, temos 2 ⋅ ⋅ 0,3 = 0,6 m². Dessa forma, o total é dado por 0,75 + 0,6 + 0,6 = 1,95 m².`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 166,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Uma pessoa pratica quatro atividades físicas - caminhar, correr, andar de bicicleta e jogar futebol - como parte 
de seu programa de emagrecimento. Essas atividades são praticadas semanalmente de acordo com o quadro, que 
apresenta o número de horas diárias por atividade. 
 
Ela deseja comemorar seu aniversário e escolhe o dia da semana em que o gasto calórico com as atividades 
físicas praticadas for o maior. Para tanto, considera que os valores dos gastos calóricos das atividades por hora (cal/h) 
são os seguintes: 
 
O dia da semana em que será comemorado o aniversário é`,
    images: ['/enem/2023/images/enem_2023_d2_q166_1.jpg', '/enem/2023/images/enem_2023_d2_q166_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `segunda-feira.` },
      { id: 'B', type: 'text', value: `terça-feira.` },
      { id: 'C', type: 'text', value: `quarta-feira.` },
      { id: 'D', type: 'text', value: `quinta-feira.` },
      { id: 'E', type: 'text', value: `sexta-feira.` },
    ],
    correct: 'C',
    explanation: `Precisamos fazer cada um dos dias: &nbsp; Segunda: 1 248+0,5 764+0 356+2 492=1614 Terça: 0,5 248+1 764+0,5 356+1 492=1558 Quarta: 0 248+1,5 764+1 356+0,5 492=1748 Quinta: 0 248+2 764+0 356+0 492=1528 Sexta: 0 248+0,5 764+0 356+2,5 492=1612 &nbsp; Temos que o dia de maior gasto calórico é quarta-feira`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 167,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A cada bimestre, a diretora de uma escola compra uma quantidade de folhas de papel ofício proporcional ao número 
de alunos matriculados. No bimestre passado, ela comprou 6 000 folhas para serem utilizadas pelos 1 200 alunos 
matriculados. Neste bimestre, alguns alunos cancelaram suas matrículas e a escola tem, agora, 1 150 alunos. 
A diretora só pode gastar R$ 220,00 nessa compra, e sabe que o fornecedor da escola vende as folhas de papel 
ofício em embalagens de 100 unidades a R$ 4,00 a embalagem. Assim, será preciso convencer o fornecedor a dar um 
desconto à escola, de modo que seja possível comprar a quantidade total de papel ofício necessária para o bimestre. 
O desconto necessário no preço final da compra, em porcentagem, pertence ao intervalo`,
    alternatives: [
      { id: 'A', type: 'text', value: `(5,0 ; 5,5).` },
      { id: 'B', type: 'text', value: `(8,0 ; 8,5).` },
      { id: 'C', type: 'text', value: `(11,5 ; 12,5).` },
      { id: 'D', type: 'text', value: `(19,5 ; 20,5).` },
      { id: 'E', type: 'text', value: `(3,5 ; 4,0).` },
    ],
    correct: 'A',
    explanation: `São utilizadas 6000 : 1200 = 5 folhas por aluno. Sendo 1150 alunos, serão necessárias 1150 x 5 = 5750 folhas. Logo, serão necessários 58 pacotes. Se cada pacote custar 4 reais, o custo será 58 x 4 = 232 reais. Logo, o desconto pode ser calculado por: 100% &#8211; (220 : 232)% = 100% &#8211; 94,8% = 5,2% Logo, está dentro do intervalo da letra A.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 168,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Em um colégio público, a admissão no primeiro ano se 
dá por sorteio. Neste ano há 55 candidatos, cujas inscrições 
são numeradas de 01 a 55. O sorteio de cada número de 
inscrição será realizado em etapas, utilizando-se duas 
urnas. Da primeira urna será sorteada uma bola, dentre 
bolas numeradas de 0 a 9, que representará o algarismo 
das unidades do número de inscrição a ser sorteado e, em 
seguida, da segunda urna, será sorteada uma bola para 
representar o algarismo das dezenas desse número. Depois 
do primeiro sorteio, e antes de se sortear o algarismo das 
dezenas, as bolas que estarão presentes na segunda 
urna serão apenas aquelas cujos números formam, com o 
algarismo já sorteado, um número de 01 a 55. 
As probabilidades de os candidatos de inscrição número 
50 e 02 serem sorteados são, respectivamente,`,
    alternatives: [
      { id: 'A', type: 'text', value: `1/50 e 1/60` },
      { id: 'B', type: 'text', value: `1/50 e 1/50` },
      { id: 'C', type: 'text', value: `1/50 e 1/10` },
      { id: 'D', type: 'text', value: `1/55 e 1/54` },
      { id: 'E', type: 'text', value: `1/100 e 1/100` },

    ],
    correct: 'A',
    explanation: ``,
    subject: ['mat'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 169,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O esquema mostra como a intensidade luminosa 
decresce com o aumento da profundidade em um rio, 
sendo L₀ a intensidade na sua superfície. 
Profundidade: 0 m — Intensidade luminosa: L₀ 
Profundidade: 1 m — Intensidade luminosa: (2/3) L₀ 
Profundidade: 2 m — Intensidade luminosa: (4/9) L₀ 
Profundidade: 3 m — Intensidade luminosa: (8/27) L₀ 
Considere que a intensidade luminosa diminui, a cada 
metro acrescido na profundidade, segundo o mesmo 
padrão do esquema. 
A intensidade luminosa correspondente à profundidade 
de 6 m é igual a`,
    images: ['/enem/2023/images/enem_2023_d2_q169.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `(1/9) L₀` },
      { id: 'B', type: 'text', value: `(16/27) L₀` },
      { id: 'C', type: 'text', value: `(32/243) L₀` },
      { id: 'D', type: 'text', value: `(64/729) L₀` },
      { id: 'E', type: 'text', value: `(128/2187) L₀` },
    ],
    correct: 'D',
    explanation: `De um metro para o próximo temos que a intensidade da luminosidade é multiplicada por 2/3. Assim, a 6 metros de profundidade, a luminosidade será igual a`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 170,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Analisando as vendas de uma empresa, o gerente concluiu que o montante diário arrecadado, em milhar de real, poderia ser calculado por uma expressão envolvendo x, em que os valores de x representam os dias do mês, variando de 1 a 30.
Um dos fatores para avaliar o desempenho mensal da empresa é verificar qual é o menor montante diário V0 arrecadado ao longo do mês e classificar o desempenho conforme as categorias apresentadas a seguir, em que as quantidades estão expressas em milhar de real:
Ótimo: V0 >= 24
Bom: 20 <= V0 < 24
Normal: 10 <= V0 < 20
Ruim: 4 <= V0 < 10
Péssimo: V0 < 4
No caso analisado, qual seria a classificação do desempenho da empresa?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Ótimo.` },
      { id: 'B', type: 'text', value: `Bom.` },
      { id: 'C', type: 'text', value: `Normal.` },
      { id: 'D', type: 'text', value: `Ruim.` },
      { id: 'E', type: 'text', value: `Péssimo.` },
    
    ],
    correct: 'D',
    explanation: ``,
    subject: ['mat'],
    topics: ['Matemática financeira', 'Questões aleatórias'],
  },
  {
    id: 171,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O calendário maia apresenta duas contagens 
simultâneas de anos, o chamado ano Tzolkim, composto 
por 260 dias e que determinava o calendário religioso, 
e o ano Haab, composto por 365 dias e que determinava o 
calendário agrícola. Um historiador encontrou evidências 
de que gerações de uma mesma família governaram certa 
comunidade maia pelo período de 20 ciclos, sendo cada 
ciclo formado por 52 anos Haab. 
Disponível em: www.suapesquisa.com. Acesso em: 20 ago. 2014. 
De acordo com as informações fornecidas, durante 
quantos anos Tzolkim aquela comunidade maia foi 
governada por tal família?`,
    alternatives: [
      { id: 'A', type: 'text', value: `741` },
      { id: 'B', type: 'text', value: `1 040` },
      { id: 'C', type: 'text', value: `1 460` },
      { id: 'D', type: 'text', value: `2 100` },
      { id: 'E', type: 'text', value: `5 200` },
    ],
    correct: 'C',
    explanation: `1 ano Tzolkim corresponde a 260 dias. Para saber a quantidade de anos Tzolkim que a família governou aquela comunidade, precisamos saber o total de dias de 20 ciclos Haab: 1 ano Haab corresponde à 365 dias 1 ciclo em anos Haab corresponde à 18980 dias 20 ciclos Haab possuem um total de 379600 dias Para converter 20 ciclos Haab em anos Tzolkim, devemos dividir 379600 por 260. 379600 260=1460 Logo, a comunidade foi governada pela família durante 1460 anos Tzolkim.`,
    subject: ['mat'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 172,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Sejam a , b e c as medidas dos lados de um triângulo 
retângulo, tendo a como medida da hipotenusa. Esses 
valores a , b e c são, respectivamente, os diâmetros dos 
círculos C 1 , C 2 e C 3 , como apresentados na figura. 
Círculo C 1 
c 
a 
Círculo C 3 
b 
Círculo C 2 
Observe que essa construção assegura, pelo teorema 
de Pitágoras, que área ( C 1 ) = área ( C 2 ) + área ( C 3 ). 
Um professor de matemática era conhecedor dessa 
construção e, confraternizando com dois amigos em uma 
pizzaria onde são vendidas pizzas somente em formato 
de círculo, lançou um desafio: mesmo sem usar um 
instrumento de medição, poderia afirmar com certeza se 
a área do círculo correspondente à pizza que ele pedisse 
era maior, igual ou menor do que a soma das áreas das 
pizzas dos dois amigos. Assim, foram pedidas três pizzas. 
O professor as dividiu ao meio e formou um triângulo com 
os diâmetros das pizzas, conforme indicado na figura. 
Meia pizza do professor 
de matemática 
Meia pizza do 
amigo 1 
α 
Meia pizza do amigo 2 
A partir da medida do ângulo a , o professor afirmou 
que a área de sua pizza é maior do que a soma das áreas 
das outras duas pizzas. 
A área da pizza do professor de matemática é maior do 
que a soma das áreas das outras duas pizzas, pois`,
    images: ['/enem/2023/images/enem_2023_d2_q172_1.jpg', '/enem/2023/images/enem_2023_d2_q172_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0° < a < 90°` },
      { id: 'B', type: 'text', value: `a = 90°` },
      { id: 'C', type: 'text', value: `90° < a < 180°` },
      { id: 'D', type: 'text', value: `a = 180°` },
      { id: 'E', type: 'text', value: `180° < a < 360°` },
    ],
    correct: 'C',
    explanation: `Sabendo que diâmetro é o dobro do raio, temos que 2 r a , 2 r b e 2 r c são, respectivamente, os diâmetros dos círculos 1, 2 e 3. Como a questão afirma que a área da pizza do professor é maior que a soma das áreas das pizzas dos amigos, temos que: simplificando, temos: Agora, aplicamos a lei dos cossenos no triângulo: Como &lt;0 , temos que cosθ &lt;0 . Então temos que θ &lt;180 (porque é um ângulo de um triângulo) e, como o cosseno é negativo, 90&lt; θ . Portanto 90&lt; θ &lt; 180 . Gabarito: C`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 173,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Entre maratonistas, um parâmetro utilizado é o de 
economia de corrida (EC). O valor desse parâmetro é 
calculado pela razão entre o consumo de oxigênio, em 
mililitro (mL) por minuto (min), e a massa, em quilograma (kg), 
do atleta correndo a uma velocidade constante. 
Disponível em: www.treinamentoonline.com.br. Acesso em: 23 out. 2019 (adaptado). 
Um maratonista, visando melhorar sua performance, 
auxiliado por um médico, mensura o seu consumo de 
oxigênio por minuto a velocidade constante. Com base 
nesse consumo e na massa do atleta, o médico calcula 
o EC do atleta. 
A unidade de medida da grandeza descrita pelo 
parâmetro EC é`,
    alternatives: [
      { id: 'A', type: 'text', value: `min 
mL kg 
⋅` },
      { id: 'B', type: 'text', value: `mL 
min kg 
⋅` },
      { id: 'C', type: 'text', value: `min mL 
⋅ 
kg` },
      { id: 'D', type: 'text', value: `min kg 
mL 
⋅` },
      { id: 'E', type: 'text', value: `é mL kg 
min 
⋅` },
    ],
    correct: 'B',
    explanation: `Como temos a razão (divisão) entre mL por min por kg, a unidade é:`,
    subject: ['mat'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 174,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Uma pessoa comprou um ingresso para o cinema em cuja entrada está afixado um mapa com a representação 
bidimensional do posicionamento das poltronas, conforme a figura. Essa pessoa, após consultar o mapa, começou 
a subir uma das escadas e parou na posição indicada pela estrela, direcionada para o norte. Ela conferiu seu bilhete 
e observou que, para encontrar sua poltrona, deveria partir do ponto onde estava, continuar subindo a escada na 
direção norte por mais quatro fileiras e olhar à sua direita, e sua poltrona será a terceira.
Nesse cinema, as poltronas são identificadas por uma letra, que indica a fileira, e um número, que fornece a
posição da poltrona na fileira, respectivamente.
A poltrona dessa pessoa é a identificada por`,
    images: ['/enem/2023/images/enem_2023_d2_q174.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A6.` },
      { id: 'B', type: 'text', value: `H1.` },
      { id: 'C', type: 'text', value: `H6.` },
      { id: 'D', type: 'text', value: `I1.` },
      { id: 'E', type: 'text', value: `I6.` },
    ],
    correct: 'E',
    explanation: null,
    subject: ['mat'],
    topics: ['Cartografia', 'Questões aleatórias'],
  },
  {
    id: 175,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O metrô de um município oferece dois tipos de tíquetes com colorações diferentes, azul e vermelha, sendo vendidos 
em cartelas, cada qual com nove tíquetes da mesma cor e mesmo valor unitário. Duas cartelas de tíquetes azuis e 
uma cartela de tíquetes vermelhos são vendidas por R$ 32,40. Sabe-se que o preço de um tíquete azul menos o preço 
de um tíquete vermelho é igual ao preço de um tíquete vermelho mais cinco centavos. 
Qual o preço, em real, de uma cartela de tíquetes vermelhos?`,
    alternatives: [
      { id: 'A', type: 'text', value: `4,68` },
      { id: 'B', type: 'text', value: `6,30` },
      { id: 'C', type: 'text', value: `9,30` },
      { id: 'D', type: 'text', value: `10,50` },
      { id: 'E', type: 'text', value: `10,65 
Escada 
N 
L 
O 
S 
Poltrona 
Posições` },
    ],
    correct: 'B',
    explanation: `B O metrô de um município oferece dois tipos de tíquetes Chamaremos o valor de cada tíquete da cartela azul de a e o de cada tíquete da cartela vermelha de v. Dessa forma, temos que o preço da cartela azul é igual a 9a e que o da vermelha é 9v. Como duas cartelas azuis mais duas cartelas vermelhas são vendidas por R$32,40, segue que 29a + 9v = 32,4 18a + 9v = 32,4 Além disso, o valor de um tíquete azul, menos o preço de um tíquete vermelho é igual ao preço de um tíquete vermelho mais cinco centavos. Logo: a &#8211; v = v + 0,05 a = 2v + 0,05a Substituindo valor de a na equação 18a+9v=32,4, temos: 18 (2v + 0,05) + 9v = 32,4 36v + 0,9 + 9v = 32,4 45v + 0,9 = 32,4 45v = 32,4 &#8211; 0,9 45v = 31,5 Como a cartela de tíquetes vermelhos custa 9v, dividimos os dois lados da equação por 5: 9v = 5,30`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 176,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Os números figurados pentagonais provavelmente 
foram introduzidos pelos pitagóricos por volta do 
século V a.C. As figuras ilustram como obter os seis 
primeiros deles, sendo os demais obtidos seguindo o 
mesmo padrão geométrico. 
22 
12 
5 
1 
35 
51 
O oitavo número pentagonal é`,
    images: ['/enem/2023/images/enem_2023_d2_q176.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `59.` },
      { id: 'B', type: 'text', value: `83.` },
      { id: 'C', type: 'text', value: `86.` },
      { id: 'D', type: 'text', value: `89.` },
      { id: 'E', type: 'text', value: `92.` },
    ],
    correct: 'E',
    explanation: `Podemos perceber que a sequência de número pentagonais segue um padrão: de um número pentagonal para o outro, aumenta sempre três unidades a mais que o aumento anterior. Isto é, os termos seguem o padrão: 1 1 + 4 = 5 5 + 7 = 12 12 + 10 = 22 22 + 13 = 35 35 + 16 = 51 51 + 19 = 70 70 + 22 = 92`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 177,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A figura ilustra uma roda-gigante no exato instante em 
que a cadeira onde se encontra a pessoa P está no ponto 
mais alto dessa roda-gigante. 
P 
Solo 
Com o passar do tempo, à medida que a roda-gigante 
gira, com velocidade angular constante e no sentido 
horário, a altura da cadeira onde se encontra a pessoa P , 
em relação ao solo, vai se alterando. 
O gráfico que melhor representa a variação dessa altura, 
em função do tempo, contado a partir do instante em que 
a cadeira da pessoa P se encontra na posição mais alta 
da roda-gigante, é 
relação ao solo 
Altura em`,
    images: ['/enem/2023/images/enem_2023_d2_q177.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'A',
    explanation: `A altura do banco varia conforme um fenômeno periódico, já que o movimento circular se repete indefinidamente. As equações paramétricas do círculo são x=r . cos(t) e y=r . sen(t) . Assim, a altura do banco é descrita por funções trigonométricas, como visto na letra A. Para verificar isso, você pode se basear na questão 145 da prova amarela de 2018. Você pode acessá-la no link abaixo: https://descomplica.com.br/gabarito-enem/questões/2018/segundo-dia/expressão-da-função-altura-e-dada-por/`,
    subject: ['mat'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 178,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Estudantes trabalhando com robótica criaram uma 
“torneira inteligente” que automatiza sua abertura e seu 
fechamento durante a limpeza das mãos. A tecnologia 
funciona da seguinte forma: ao se colocarem as mãos 
sob a torneira, ela libera água durante 3 segundos para 
que a pessoa possa molhá-las. Em seguida, interrompe o 
fornecimento de água por 5 segundos, enquanto a pessoa 
ensaboa suas mãos, e finaliza o ciclo liberando água para 
o enxágue por mais 3 segundos. Considere o tempo ( t ), 
em segundo, contado a partir do instante em que se inicia 
o ciclo. A vazão de água nessa torneira é constante. 
Um esboço de gráfico que descreve o volume de água 
acumulado, em litro, liberado por essa torneira durante um 
ciclo de lavagem das mãos, em função do tempo ( t ), em 
segundo, é 
Volume de água (L)`,
    images: ['/enem/2023/images/enem_2023_d2_q178_A.jpg', '/enem/2023/images/enem_2023_d2_q178_B.jpg', '/enem/2023/images/enem_2023_d2_q178_C.jpg', '/enem/2023/images/enem_2023_d2_q178_D.jpg', '/enem/2023/images/enem_2023_d2_q178_E.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'B',
    explanation: `B Devemos considerar que há dois momentos distintos de crescimento constante (em linha reta). Assim, eliminamos as opções C e D. Como o ritmo é sempre o mesmo, tais momentos em linha reta devem ter a mesma inclinação. Logo, eliminamos a letra E. A questão pede o valor acumulado de água coletada. Ou seja, mesmo quando o fluxo de água estiver interrompido, temos uma quantidade de água, diferente de zero, que já está acumulada. Logo, eliminamos a letra A, sobrando a letra B.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 179,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `As características culturais variam de povo para povo. 
Há notícias de um povo que possuía formas de contar 
diferentes das nossas, como indicado no quadrinho a seguir. 
Segundo o padrão de contagem indicado na figura, as 
representações dos numerais cinco e sete, nessa cultura, 
devem ser, respectivamente,`,
    images: ['/enem/2023/images/enem_2023_d2_q179.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `okosa urapum urapum urapum e okosa okosa urapum 
urapum urapum.` },
      { id: 'B', type: 'text', value: `okosa okosa urapum e okosa okosa okosa okosa urapum.` },
      { id: 'C', type: 'text', value: `okosa okosa urapum e okosa okosa okosa urapum.` },
      { id: 'D', type: 'text', value: `okosa urapum urapum e okosa urapum okosa urapum 
urapum.` },
      { id: 'E', type: 'text', value: `okosa okosa urapum e okosa okosa okosa okosa.` },
    ],
    correct: 'C',
    explanation: `C Seguindo o padrão, temos que inserir o maior número possível de Okosa e o menor número possível de Urapum. Assim, a sequência correta é: 5: okasa okasa urapum 7: okasa okasa okasa urupum`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 180,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um tipo de semente necessita de bastante água nos 
dois primeiros meses após o plantio. Um produtor pretende 
estabelecer o melhor momento para o plantio desse tipo de 
semente, nos meses de outubro a março. Após consultar 
a previsão do índice mensal de precipitação de chuva 
(ImPC) da região onde ocorrerá o plantio, para o período 
chuvoso de 2020 - 2021, ele obteve os seguintes dados: 
• outubro/2020: ImPC = 250 mm; 
• novembro/2020: ImPC = 150 mm; 
• dezembro/2020: ImPC = 200 mm; 
• janeiro/2021: ImPC = 450 mm; 
• fevereiro/2021: ImPC = 100 mm; 
• março/2021: ImPC = 200 mm. 
Com base nessas previsões, ele precisa escolher 
dois meses consecutivos em que a média mensal de 
precipitação seja a maior possível. 
No início de qual desses meses o produtor deverá plantar 
esse tipo de semente?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Outubro.` },
      { id: 'B', type: 'text', value: `Novembro.` },
      { id: 'C', type: 'text', value: `Dezembro.` },
      { id: 'D', type: 'text', value: `Janeiro.` },
      { id: 'E', type: 'text', value: `Fevereiro.` },
    ],
    correct: 'C',
    explanation: `C Devemos fazer a soma de dois meses por vez: Outubro + novembro = 250 + 150 = 400 mm. Novembro + dezembro = 150 + 200 = 350mm. Dezembro + janeiro = 200 + 450 = 650mm. Janeiro + fevereiro = 450 + 100 = 550 mm. Fevereiro + março = 100 + 200 = 300 mm. Logo, o maior valor é aquele que começa em dezembro e segue pelo mês de janeiro. Logo, letra C.`,
    subject: ['mat'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
];

export default ENEM_2023_D2;
