/* ============ DATA MODEL ============ */

/* ---- Calculador de planes (fiel a Calculador.xlsx) ---- */
const FACTOR_TABLE = [
  {desde:0,  titular:0.6, carga:0.6},
  {desde:20, titular:0.9, carga:0.7},
  {desde:25, titular:1.0, carga:0.7},
  {desde:35, titular:1.3, carga:0.9},
  {desde:45, titular:1.4, carga:1.0},
  {desde:55, titular:2.0, carga:1.4},
  {desde:65, titular:2.4, carga:2.2},
];
const GES_FACTOR = 0.854;
const PLAN_DATA = {"santiago": [{"name": "Pleno Libre Elección", "plans": [{"code": "PLEN249", "pb": 1.93}, {"code": "PLEN250", "pb": 2.04}, {"code": "PLEN251", "pb": 2.17}, {"code": "PLEN252", "pb": 2.26}, {"code": "PLEN253", "pb": 2.39}, {"code": "PLEN254", "pb": 2.52}, {"code": "PLEN255", "pb": 2.72}, {"code": "PLEN256", "pb": 2.8}, {"code": "PLEN257", "pb": 2.96}, {"code": "PLEN258", "pb": 3.05}, {"code": "PLEN259", "pb": 3.25}, {"code": "PLEN260", "pb": 3.42}, {"code": "PLEN261", "pb": 3.6}, {"code": "PLEN262", "pb": 3.75}, {"code": "PLEN263", "pb": 4.01}, {"code": "PLEN264", "pb": 4.22}, {"code": "PLEN265", "pb": 4.44}, {"code": "PLEN266", "pb": 4.72}, {"code": "PLEN267", "pb": 5.03}, {"code": "PLEN268", "pb": 5.14}, {"code": "PLEN269", "pb": 5.29}, {"code": "PLEN270", "pb": 5.45}, {"code": "PLEN271", "pb": 5.65}, {"code": "PLEN272", "pb": 5.95}, {"code": "PLEN273", "pb": 6.3}, {"code": "PLEN274", "pb": 6.47}, {"code": "PLEN275", "pb": 6.93}]}, {"name": "Pleno Salud", "plans": [{"code": "PS260600", "pb": 1.18}, {"code": "PS260601", "pb": 1.25}, {"code": "PS260602", "pb": 1.28}, {"code": "PS260603", "pb": 1.32}, {"code": "PS260604", "pb": 1.37}, {"code": "PS260605", "pb": 1.43}, {"code": "PS260606", "pb": 1.53}, {"code": "PS260607", "pb": 1.58}, {"code": "PS260608", "pb": 1.65}, {"code": "PS260609", "pb": 1.69}, {"code": "PS260610", "pb": 1.75}, {"code": "PS260611", "pb": 1.82}, {"code": "PS260612", "pb": 1.89}, {"code": "PS260613", "pb": 1.96}, {"code": "PS260614", "pb": 2.02}, {"code": "PS260615", "pb": 2.1}, {"code": "PS260616", "pb": 2.18}, {"code": "PS260617", "pb": 2.25}, {"code": "PS260618", "pb": 2.32}, {"code": "PS260619", "pb": 2.39}, {"code": "PS260620", "pb": 2.46}, {"code": "PS260621", "pb": 2.54}, {"code": "PS260622", "pb": 2.6}, {"code": "PS260623", "pb": 2.67}, {"code": "PS260624", "pb": 2.74}, {"code": "PS260625", "pb": 2.81}, {"code": "PS260626", "pb": 2.9}, {"code": "PS260627", "pb": 2.98}, {"code": "PS260628", "pb": 3.07}, {"code": "PS260629", "pb": 3.13}, {"code": "PS260630", "pb": 3.19}, {"code": "PS260631", "pb": 3.28}, {"code": "PS260632", "pb": 3.35}, {"code": "PS260633", "pb": 3.41}, {"code": "PS260634", "pb": 3.49}, {"code": "PS260635", "pb": 3.58}, {"code": "PS260636", "pb": 3.67}, {"code": "PS260637", "pb": 3.75}, {"code": "PS260638", "pb": 3.84}, {"code": "PS260639", "pb": 3.94}, {"code": "PS260640", "pb": 4.03}, {"code": "PS260641", "pb": 4.11}, {"code": "PS260642", "pb": 4.2}, {"code": "PS260643", "pb": 4.28}, {"code": "PS260644", "pb": 4.35}, {"code": "PS260645", "pb": 4.43}, {"code": "PS260646", "pb": 4.51}, {"code": "PS260647", "pb": 4.6}, {"code": "PS260648", "pb": 4.7}, {"code": "PS260649", "pb": 4.8}, {"code": "PS260650", "pb": 4.91}, {"code": "PS260651", "pb": 5.0}, {"code": "PS260652", "pb": 5.1}, {"code": "PS260653", "pb": 5.2}, {"code": "PS260654", "pb": 5.3}, {"code": "PS260655", "pb": 5.4}, {"code": "PS260656", "pb": 5.51}, {"code": "PS260657", "pb": 5.6}, {"code": "PS260658", "pb": 5.7}, {"code": "PS260659", "pb": 5.8}, {"code": "PS260660", "pb": 5.91}, {"code": "PS260661", "pb": 6.0}, {"code": "PS260662", "pb": 6.1}]}, {"name": "Pleno Max", "plans": [{"code": "PM260301", "pb": 1.42}, {"code": "PM260302", "pb": 1.5}, {"code": "PM260303", "pb": 1.58}, {"code": "PM260304", "pb": 1.65}, {"code": "PM260305", "pb": 1.72}, {"code": "PM260306", "pb": 1.8}, {"code": "PM260307", "pb": 1.89}, {"code": "PM260308", "pb": 1.97}, {"code": "PM260309", "pb": 2.09}, {"code": "PM260310", "pb": 2.18}, {"code": "PM260311", "pb": 2.25}, {"code": "PM260312", "pb": 2.35}, {"code": "PM260313", "pb": 2.44}, {"code": "PM260314", "pb": 2.5}, {"code": "PM260315", "pb": 2.55}, {"code": "PM260316", "pb": 2.6}, {"code": "PM260317", "pb": 2.61}, {"code": "PM260318", "pb": 2.71}, {"code": "PM260319", "pb": 2.91}, {"code": "PM260320", "pb": 3.15}, {"code": "PM260321", "pb": 3.45}, {"code": "PM260322", "pb": 3.65}, {"code": "PM260323", "pb": 3.83}, {"code": "PM260324", "pb": 4.02}, {"code": "PM260325", "pb": 4.19}, {"code": "PM260326", "pb": 4.36}, {"code": "PM260327", "pb": 4.45}, {"code": "PM260328", "pb": 4.58}, {"code": "PM260329", "pb": 4.75}, {"code": "PM260330", "pb": 4.93}, {"code": "PM260331", "pb": 5.13}, {"code": "PM260332", "pb": 5.32}, {"code": "PM260333", "pb": 5.45}, {"code": "PM260334", "pb": 5.64}, {"code": "PM260335", "pb": 5.8}, {"code": "PM260336", "pb": 6.05}]}], "regional": [{"name": "Pleno Plus Norte", "plans": [{"code": "PPR25100", "pb": 1.74}, {"code": "PPR25110", "pb": 1.85}, {"code": "PPR25120", "pb": 1.95}, {"code": "PPR25130", "pb": 2.05}, {"code": "PPR25140", "pb": 2.15}, {"code": "PPR25150", "pb": 2.25}, {"code": "PPR25160", "pb": 2.35}, {"code": "PPR25170", "pb": 2.45}, {"code": "PPR24180", "pb": 2.55}, {"code": "PPR24190", "pb": 2.64}, {"code": "PPR24200", "pb": 2.8}, {"code": "PPR24210", "pb": 2.95}, {"code": "PPR24220", "pb": 3.03}, {"code": "PPR24230", "pb": 3.18}, {"code": "PPR24240", "pb": 3.33}, {"code": "PPR24250", "pb": 3.48}, {"code": "PPR24260", "pb": 3.63}, {"code": "PPR24270", "pb": 3.78}, {"code": "PPR24280", "pb": 3.93}, {"code": "PPR24290", "pb": 4.08}, {"code": "PPR24300", "pb": 4.24}, {"code": "PPR24310", "pb": 4.39}, {"code": "PPR24320", "pb": 4.54}, {"code": "PPR24330", "pb": 4.69}, {"code": "PPR24340", "pb": 4.84}, {"code": "PPR24350", "pb": 5.09}, {"code": "PPR24360", "pb": 5.24}]}, {"name": "Pleno Plus V", "plans": [{"code": "PPV25100", "pb": 1.72}, {"code": "PPV25110", "pb": 1.83}, {"code": "PPV25120", "pb": 1.93}, {"code": "PPV25130", "pb": 2.03}, {"code": "PPV25140", "pb": 2.13}, {"code": "PPV25150", "pb": 2.23}, {"code": "PPV25160", "pb": 2.33}, {"code": "PPV25170", "pb": 2.43}, {"code": "PPV24180", "pb": 2.53}, {"code": "PPV24190", "pb": 2.62}, {"code": "PPV24200", "pb": 2.77}, {"code": "PPV24210", "pb": 2.92}, {"code": "PPV24220", "pb": 3.0}, {"code": "PPV24230", "pb": 3.15}, {"code": "PPV24240", "pb": 3.3}, {"code": "PPV24250", "pb": 3.45}, {"code": "PPV24260", "pb": 3.6}, {"code": "PPV24270", "pb": 3.75}, {"code": "PPV24280", "pb": 3.9}, {"code": "PPV24290", "pb": 4.05}, {"code": "PPV24300", "pb": 4.2}, {"code": "PPV24310", "pb": 4.35}, {"code": "PPV24320", "pb": 4.5}, {"code": "PPV24330", "pb": 4.65}, {"code": "PPV24340", "pb": 4.8}, {"code": "PPV24350", "pb": 5.05}, {"code": "PPV24360", "pb": 5.2}]}, {"name": "Pleno Plus Sur", "plans": [{"code": "PPS23110", "pb": 1.73}, {"code": "PPS23120", "pb": 1.79}, {"code": "PPS23130", "pb": 1.89}, {"code": "PPS23140", "pb": 2.03}, {"code": "PPS23150", "pb": 2.14}, {"code": "PPS23160", "pb": 2.25}, {"code": "PPS23170", "pb": 2.32}, {"code": "PPS23180", "pb": 2.41}, {"code": "PPS23190", "pb": 2.51}, {"code": "PPS23200", "pb": 2.6}, {"code": "PPS23210", "pb": 2.67}, {"code": "PPS23220", "pb": 2.88}, {"code": "PPS23230", "pb": 3.05}, {"code": "PPS23240", "pb": 3.29}, {"code": "PPS23250", "pb": 3.35}, {"code": "PPS23260", "pb": 3.39}, {"code": "PPS23270", "pb": 3.84}, {"code": "PPS23280", "pb": 4.23}, {"code": "PPS23290", "pb": 4.54}, {"code": "PPS23300", "pb": 4.81}, {"code": "PPS23310", "pb": 5.29}]}]};

function lookupFactor(edad, kind){
  const n = parseFloat(edad);
  if(isNaN(n)) return 0;
  let best = FACTOR_TABLE[0];
  for(const row of FACTOR_TABLE){
    if(n >= row.desde) best = row; else break;
  }
  return best[kind];
}

/* Tope legal cotización 7% salud vigente desde 01-01-2026: 6,293 UF (Fuente: Isapre Nueva Mas Vida / Isapre Fundación / Banmédica) */
/* Tope imponible mensual (pensiones y salud) vigente desde 2026: 90 UF (Fuente: Superintendencia de Pensiones).
   El 7% de este tope da un máximo de cotización de salud de ~6,3 UF. */
const TOPE_IMPONIBLE_UF = 90.0;

let UF_VALOR = null;
let UF_STATUS = 'loading'; /* loading | ok | error */

async function fetchUFValue(){
  try{
    const res = await fetch('https://mindicador.cl/api/uf');
    const data = await res.json();
    if(data && data.serie && data.serie.length){
      UF_VALOR = data.serie[0].valor;
      UF_STATUS = 'ok';
    } else {
      UF_STATUS = 'error';
    }
  }catch(e){
    UF_STATUS = 'error';
  }
  if(typeof unlocked !== 'undefined' && unlocked) renderApp();
}

function getEffectiveUF(bucket){
  if(bucket.uf_manual !== undefined && bucket.uf_manual !== '' && !isNaN(parseFloat(bucket.uf_manual))){
    return parseFloat(bucket.uf_manual);
  }
  return UF_VALOR;
}

function calcular7Legal(rentaImponible, uf){
  if(!uf || isNaN(rentaImponible) || rentaImponible <= 0) return null;
  const topeClp = TOPE_IMPONIBLE_UF * uf;
  const aplicaTope = rentaImponible > topeClp;
  const rentaAfecta = Math.min(rentaImponible, topeClp);
  const montoClp = rentaAfecta * 0.07;
  const montoUf = montoClp / uf;
  return {montoClp, montoUf, aplicaTope, topeClp};
}

function bestPerGroup(groups, factorSum, personas, targetUF){
  return groups.map(g=>{
    let best=null;
    g.plans.forEach(p=>{
      const final = factorSum*p.pb + personas*GES_FACTOR;
      const diff = Math.abs(final-targetUF);
      if(!best || diff < best.diff) best = {grupo:g.name, code:p.code, pb:p.pb, final, diff};
    });
    return best;
  });
}

function pickTwoPlanes(groups, factorSum, personas, targetUF, forceGroupName){
  const perGroup = bestPerGroup(groups, factorSum, personas, targetUF);
  if(forceGroupName && perGroup.some(x=>x.grupo===forceGroupName)){
    const forzado = perGroup.find(x=>x.grupo===forceGroupName);
    const resto = perGroup.filter(x=>x.grupo!==forceGroupName).sort((a,b)=>a.diff-b.diff);
    return [forzado, resto[0]].filter(Boolean);
  }
  return [...perGroup].sort((a,b)=>a.diff-b.diff).slice(0,2);
}

function calcularComparativo(bucket){
  const renta = parseFloat(state.s7.renta_imponible);
  const uf = getEffectiveUF(bucket);
  const edadTitular = parseFloat(bucket.edad_titular);
  const cargas = (bucket.cargas_edades||[]).filter(a=>a!==''&&a!==null&&a!==undefined&&!isNaN(a)).map(Number);
  const factorTitular = lookupFactor(edadTitular, 'titular');
  const factorCargas = cargas.reduce((s,a)=>s+lookupFactor(a,'carga'), 0);
  const legal7 = calcular7Legal(renta, uf);

  const out = {uf, renta, edadTitular, cargas, factorTitular, factorCargas, legal7,
    edadOk: !isNaN(edadTitular), rentaOk: !isNaN(renta) && renta>0, ufOk: !!uf};

  if(out.edadOk && legal7){
    const target = legal7.montoUf;
    out.target = target;
    out.santiagoSolo = pickTwoPlanes(PLAN_DATA.santiago, factorTitular, 1, target, 'Pleno Libre Elección');
    out.regionalSolo = pickTwoPlanes(PLAN_DATA.regional, factorTitular, 1, target, null);
    if(cargas.length){
      const personasConCargas = 1+cargas.length;
      const factorConCargas = factorTitular+factorCargas;
      out.santiagoConCargas = pickTwoPlanes(PLAN_DATA.santiago, factorConCargas, personasConCargas, target, 'Pleno Libre Elección');
      out.regionalConCargas = pickTwoPlanes(PLAN_DATA.regional, factorConCargas, personasConCargas, target, null);
      const todasConCargas = [...out.santiagoConCargas, ...out.regionalConCargas];
      out.masEconomicoConCargas = todasConCargas.sort((a,b)=>a.final-b.final)[0];
    }
  }
  return out;
}

const RADIO = 'radio';
const RADIO_OTHER = 'radio_other';
const CHECK_MULTI = 'check_multi';
const CHECK_MULTI_OTHER = 'check_multi_other';
const CHECKLIST = 'checklist';
const SCALE = 'scale';
const TEXT = 'text';
const TEXTAREA = 'textarea';
const NUMBER = 'number';

const sections = [
  {
    id:'s1', num:1, title:'Romper el hielo',
    sub:'Marca cada pregunta a medida que la conversas con el cliente.',
    fields:[
      {key:'q_como_estas', type:CHECKLIST, label:'¿Cómo estás?'},
      {key:'q_minutos', type:CHECKLIST, label:'¿Tienes un par de minutos para conversar?'},
      {key:'q_dedica', type:CHECKLIST, label:'¿A qué te dedicas actualmente?'},
      {key:'q_dependiente', type:CHECKLIST, label:'¿Trabajas dependiente o independiente?'},
    ],
    hasObservaciones:true
  },
  {
    id:'s2', num:2, title:'Situación actual',
    sub:'Conoce su sistema de salud y su nivel de conformidad actual.',
    fields:[
      {key:'sistema_salud', type:RADIO_OTHER, label:'¿Qué sistema de salud tienes?',
        options:['Nueva Mas Vida','Consalud','Colmena','Banmédica','Cruz Blanca','Vida Tres','Esencial','Fonasa']},
      {key:'tiempo_institucion', type:RADIO, label:'¿Hace cuánto tiempo estás en esa institución?',
        options:['Menos de 1 año','1 a 3 años','3 a 5 años','Más de 5 años','Más de 10 años']},
      {key:'por_que_eligio', type:TEXTAREA, label:'¿Por qué elegiste ese plan?'},
      {key:'conformidad', type:SCALE, label:'En una escala del 1 al 10, ¿qué tan conforme estás con tu plan?'},
    ]
  },
  {
    id:'s3', num:3, title:'Detectar dolores',
    sub:'Identifica fricciones reales con el plan actual.',
    fields:[
      {key:'reajustado', type:RADIO, label:'¿Te han reajustado el plan alguna vez?', options:['Sí','No'],
        conditional:{onValue:'Sí', field:{key:'cuantas_veces', type:NUMBER, label:'¿Cuántas veces?'}}},
      {key:'no_gusta', type:CHECK_MULTI_OTHER, label:'¿Qué es lo que menos te gusta de tu plan?',
        options:['Es muy caro','Mala cobertura','Mala atención','Clínica que usa no tiene convenio','No entiende su plan','No tiene ejecutivo']},
      {key:'paga_mucho', type:RADIO, label:'¿Sientes que pagas mucho para los beneficios que recibes?', options:['Sí','No','No lo sé']},
      {key:'conoce_cobertura', type:RADIO, label:'¿Conoces realmente lo que cubre tu plan?', options:['Sí','No','Parcialmente']},
      {key:'sabe_cuanto_paga', type:RADIO, label:'¿Sabes cuánto pagas mensualmente?', options:['Sí','No'],
        conditional:{onValue:'Sí', field:{key:'monto_aprox', type:TEXT, label:'Monto aproximado'}}},
    ]
  },
  {
    id:'s4', num:4, title:'Necesidades',
    sub:'Entiende sus preferencias de atención y su composición familiar.',
    fields:[
      {key:'clinica_preferida', type:RADIO_OTHER, label:'¿Cuál es la clínica donde prefieres atenderte?',
        options:['Clínica Bupa','Red Salud','Andes Salud','Hospital Clínico']},
      {key:'cargas_familiares', type:CHECK_MULTI, label:'¿Tienes cargas familiares?', options:['No','Cónyuge','Hijos'],
        conditional:{onValue:'Hijos', field:{key:'cantidad_hijos', type:NUMBER, label:'Cantidad de hijos'}}},
      {key:'uso_plan', type:RADIO, label:'¿Utilizas mucho el plan?', options:['Poco','Regular','Frecuente']},
      {key:'que_utiliza_mas', type:CHECK_MULTI_OTHER, label:'¿Qué utilizas más?',
        options:['Consultas','Exámenes','Hospitalizaciones','Urgencias','Medicamentos','Maternidad']},
    ]
  },
  {
    id:'s5', num:5, title:'Conocimiento del sistema',
    sub:'Mide cuánto entiende el cliente sobre sus propios derechos y coberturas.',
    fields:[
      {key:'sabe_ges', type:RADIO, label:'¿Sabes qué es GES?', options:['Sí','No']},
      {key:'sabe_caec', type:RADIO, label:'¿Sabes qué es CAEC?', options:['Sí','No']},
      {key:'conoce_ley_urgencia', type:RADIO, label:'¿Conoces la Ley de Urgencia?', options:['Sí','No']},
      {key:'hace_cuanto_revisa', type:RADIO, label:'¿Hace cuánto tiempo nadie revisa tu plan?',
        options:['Menos de 1 año','Más de 1 año','Más de 3 años','Nunca']},
    ]
  },
  {
    id:'s6', num:6, title:'Oportunidad de cambio',
    sub:'Si existiera un plan más barato, con mejores coberturas, en sus clínicas y sin perder beneficios.',
    fields:[
      {key:'interesa_conocer', type:RADIO, label:'¿Te interesaría conocerlo?', options:['Sí','No','Depende']},
      {key:'que_importante', type:RADIO_OTHER, label:'¿Qué sería lo más importante para ti?',
        options:['Ahorrar dinero','Mejor cobertura','Mejor clínica','Más beneficios','Mejor atención','Ejecutivo permanente']},
    ]
  },
  {
    id:'s7', num:7, title:'Análisis económico',
    sub:'Datos para dimensionar la capacidad de inversión del cliente.',
    fields:[
      {key:'renta_imponible', type:NUMBER, label:'Renta imponible aproximada (en pesos)'},
      {key:'conoce_7', type:RADIO, label:'¿Conoces el valor de tu 7%?', options:['Sí','No']},
      {key:'dispuesto_invertir', type:RADIO, label:'¿Estarías dispuesto a invertir un poco más si realmente obtuvieras un plan mucho mejor?', options:['Sí','No','Depende']},
    ]
  },
  {
    id:'s7b', num:0, title:'Calculador de planes (7% legal y planes más cercanos)',
    sub:'Con la renta imponible ya ingresada, calculamos tu 7% legal exacto y buscamos los planes más cercanos para titular solo y titular con cargas, en Santiago y Regiones.',
    isCalculadora:true,
    fields:[
      {key:'edad_titular', type:NUMBER, label:'Edad del titular'},
      {key:'uf_manual', type:NUMBER, label:'Valor UF del día (autocompletado; edítalo si es necesario)'},
    ]
  },
  {
    id:'s8', num:8, title:'Beneficios que más le interesan',
    sub:'Selecciona todos los que apliquen.',
    fields:[
      {key:'beneficios', type:CHECK_MULTI, label:'Beneficios de interés', hideLabel:true,
        options:['Telemedicina ilimitada','Descuento en medicamentos','Rescate de urgencia','Kinesiología a domicilio','Telemedicina veterinaria','Cobertura hospitalaria','Libre elección']},
    ]
  },
  {
    id:'s9', num:9, title:'Cierre',
    sub:'Agenda el envío de la propuesta y solicita la documentación necesaria.',
    fields:[
      {key:'estudio_comparativo', type:RADIO, label:'¿Te gustaría que hiciera un estudio comparativo gratuito de tu plan?', options:['Sí','No']},
      {key:'documentos', type:CHECK_MULTI, label:'Documentos a solicitar', options:['Liquidación de sueldo','Cédula de identidad','Certificado de cotizaciones','Plan actual']},
      {key:'fecha_propuesta', type:'date', label:'Fecha para enviar propuesta'},
      {key:'hora_propuesta', type:'time', label:'Hora'},
    ]
  },
  {
    id:'s10', num:10, title:'Observaciones del asesor',
    sub:'Cierra la ficha con tus impresiones generales de la llamada.',
    fields:[
      {key:'obs_asesor', type:TEXTAREA, label:'Observaciones', hideLabel:true, rows:8},
    ]
  },
];

const clienteFields = [
  {key:'nombre', type:TEXT, label:'Nombre'},
  {key:'telefono', type:TEXT, label:'Teléfono'},
  {key:'correo', type:'email', label:'Correo electrónico'},
  {key:'edad', type:NUMBER, label:'Edad'},
  {key:'comuna', type:TEXT, label:'Comuna'},
  {key:'profesion', type:TEXT, label:'Profesión / actividad'},
  {key:'empresa', type:TEXT, label:'Empresa donde trabaja'},
  {key:'fecha', type:'date', label:'Fecha de la entrevista'},
];
sections.forEach((s,i)=>{ s.num = i+1; });

/* total steps: 0=cliente, 1..sections.length=sections, last=summary */
const TOTAL_STEPS = sections.length + 2;

/* ============ STATE ============ */
let state = { cliente:{} };
sections.forEach(s => state[s.id] = {});
let step = 0;

function fichaId(){
  if(!window._fichaId){
    window._fichaId = 'FIC-' + Math.random().toString(36).slice(2,7).toUpperCase();
  }
  return window._fichaId;
}

/* ============ RENDER HELPERS ============ */

function el(html){
  const d = document.createElement('div');
  d.innerHTML = html.trim();
  return d.firstElementChild;
}

function renderField(f, bucket){
  const val = bucket[f.key];
  let inner = '';

  if(f.type === TEXT || f.type === NUMBER || f.type === 'email' || f.type === 'date' || f.type === 'time'){
    const htype = f.type === TEXT ? 'text' : f.type;
    inner = `<input type="${htype}" data-key="${f.key}" value="${val ? escapeAttr(val) : ''}" placeholder="${f.placeholder||''}">`;
  }
  else if(f.type === TEXTAREA){
    inner = `<textarea data-key="${f.key}" rows="${f.rows||3}" placeholder="Escribe aquí...">${val ? escapeHtml(val) : ''}</textarea>`;
  }
  else if(f.type === RADIO || f.type === RADIO_OTHER){
    const opts = f.options.map(o => optChip(f.key, o, val === o, 'radio')).join('');
    let otherChip = '';
    let otherInput = '';
    if(f.type === RADIO_OTHER){
      const isOtherSelected = val && !f.options.includes(val);
      otherChip = optChip(f.key, '__OTHER__', isOtherSelected, 'radio', 'Otro');
      if(isOtherSelected || bucket['__other_open_'+f.key]){
        otherInput = `<div class="opt-other-input"><input type="text" data-other-key="${f.key}" placeholder="Especifica..." value="${isOtherSelected ? escapeAttr(val) : ''}"></div>`;
      }
    }
    inner = `<div class="options">${opts}${otherChip}</div>${otherInput}`;
  }
  else if(f.type === CHECK_MULTI || f.type === CHECK_MULTI_OTHER){
    const arr = val || [];
    const opts = f.options.map(o => optChip(f.key, o, arr.includes(o), 'checkbox')).join('');
    let otherChip='', otherInput='';
    if(f.type === CHECK_MULTI_OTHER){
      const otherVal = bucket['__other_'+f.key];
      const otherOn = otherVal !== undefined && otherVal !== null && otherVal !== '';
      otherChip = optChip(f.key, '__OTHER__', otherOn || bucket['__other_open_'+f.key], 'checkbox', 'Otro');
      if(otherOn || bucket['__other_open_'+f.key]){
        otherInput = `<div class="opt-other-input"><input type="text" data-other-key="${f.key}" placeholder="Especifica..." value="${otherVal ? escapeAttr(otherVal) : ''}"></div>`;
      }
    }
    inner = `<div class="options">${opts}${otherChip}</div>${otherInput}`;
  }
  else if(f.type === CHECKLIST){
    const on = !!val;
    inner = `<div class="checklist-item ${on?'done':''}" data-key="${f.key}" data-kind="checklistitem">
      <input type="checkbox" ${on?'checked':''} tabindex="-1">
      <span>${f.label}</span>
    </div>`;
    return `<div class="field">${inner}</div>`;
  }
  else if(f.type === SCALE){
    const buttons = [];
    for(let i=1;i<=10;i++){
      buttons.push(`<button type="button" data-key="${f.key}" data-value="${i}" class="${val===i?'on':''}">${i}</button>`);
    }
    inner = `<div class="scale">${buttons.join('')}</div>
      <div class="scale-labels"><span>Nada conforme</span><span>Totalmente conforme</span></div>`;
  }

  const labelHtml = f.hideLabel ? '' : `<label class="q">${f.label}</label>`;
  return `<div class="field">${labelHtml}${inner}</div>`;
}

function optChip(key, value, checked, kind, displayOverride){
  const display = displayOverride || value;
  const cls = checked ? (kind==='checkbox'?'opt checked accent-checked':'opt checked') : 'opt';
  return `<div class="${cls}" data-key="${key}" data-value="${escapeAttr(value)}" data-kind="${kind}" role="${kind}" aria-checked="${checked}" tabindex="0">
    <input type="${kind}" ${checked?'checked':''} tabindex="-1" style="pointer-events:none">${display}
  </div>`;
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function escapeAttr(s){ return escapeHtml(s); }

/* ============ EVENT WIRING (delegation) ============ */

function attachSectionEvents(container, fields, bucket, rerender){
  container.querySelectorAll('input[type=text][data-key], input[type=number][data-key], input[type=email][data-key], input[type=date][data-key], input[type=time][data-key]').forEach(inp=>{
    inp.addEventListener('input', e=>{
      bucket[inp.dataset.key] = inp.value;
    });
  });
  container.querySelectorAll('textarea[data-key]').forEach(ta=>{
    ta.addEventListener('input', e=>{
      bucket[ta.dataset.key] = ta.value;
    });
  });
  container.querySelectorAll('input[data-other-key]').forEach(inp=>{
    inp.addEventListener('input', e=>{
      const key = inp.dataset.otherKey;
      const field = fields.find(f=>f.key===key);
      if(field.type === RADIO_OTHER){
        bucket[key] = inp.value;
      } else {
        bucket['__other_'+key] = inp.value;
      }
    });
  });
  function activateRadioChip(chip){
    const key = chip.dataset.key;
    const value = chip.dataset.value;
    if(value === '__OTHER__'){
      bucket['__other_open_'+key] = true;
      if(bucket[key] && fields.find(f=>f.key===key).options.includes(bucket[key])){
        bucket[key] = '';
      }
    } else {
      bucket[key] = value;
      bucket['__other_open_'+key] = false;
    }
    rerender();
  }
  function activateCheckboxChip(chip){
    const key = chip.dataset.key;
    const value = chip.dataset.value;
    if(value === '__OTHER__'){
      bucket['__other_open_'+key] = !bucket['__other_open_'+key];
      if(!bucket['__other_open_'+key]) bucket['__other_'+key] = '';
      rerender();
      return;
    }
    const arr = bucket[key] || [];
    const idx = arr.indexOf(value);
    if(idx >= 0) arr.splice(idx,1); else arr.push(value);
    bucket[key] = arr;
    rerender();
  }
  container.querySelectorAll('.opt[data-kind=radio]').forEach(chip=>{
    chip.addEventListener('click', ()=>activateRadioChip(chip));
    chip.addEventListener('keydown', e=>{
      if(e.key===' ' || e.key==='Enter'){ e.preventDefault(); activateRadioChip(chip); }
    });
  });
  container.querySelectorAll('.opt[data-kind=checkbox]').forEach(chip=>{
    chip.addEventListener('click', ()=>activateCheckboxChip(chip));
    chip.addEventListener('keydown', e=>{
      if(e.key===' ' || e.key==='Enter'){ e.preventDefault(); activateCheckboxChip(chip); }
    });
  });
  container.querySelectorAll('.scale button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      bucket[btn.dataset.key] = parseInt(btn.dataset.value,10);
      rerender();
    });
  });
  container.querySelectorAll('.checklist-item[data-kind=checklistitem]').forEach(item=>{
    item.addEventListener('click', ()=>{
      const key = item.dataset.key;
      bucket[key] = !bucket[key];
      rerender();
    });
  });
}

/* ============ CONDITIONAL FIELD RENDER ============ */

function renderFieldsWithConditionals(fields, bucket, rerender){
  let html = '';
  fields.forEach(f=>{
    html += renderField(f, bucket);
    if(f.conditional){
      const match = f.type === CHECK_MULTI
        ? (bucket[f.key]||[]).includes(f.conditional.onValue)
        : bucket[f.key] === f.conditional.onValue;
      if(match){
        html += `<div class="conditional">${renderField(f.conditional.field, bucket)}</div>`;
      }
    }
  });
  return html;
}

/* ============ MAIN RENDER ============ */

function renderApp(){
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(renderMasthead());
  if(step < TOTAL_STEPS - 1){
    app.appendChild(renderPulse());
  }

  if(step === 0){
    app.appendChild(renderClienteStep());
  } else if(step <= sections.length){
    app.appendChild(renderSectionStep(sections[step-1]));
  } else {
    app.appendChild(renderSummary());
  }
}

/* ==========================================================================
   CLAVE DE ACCESO — SOLO EL ADMINISTRADOR DEBE EDITAR ESTA LÍNEA.
   Los asesores NO tienen ninguna opción dentro de la app para cambiarla.
   Para actualizarla (por ejemplo, si un asesor deja de trabajar contigo):
     1. Cambia el texto entre comillas más abajo por la nueva clave.
     2. Guarda el archivo y vuelve a entregarlo a tu equipo vigente.
     3. El asesor que ya no debe tener acceso se queda con la clave antigua,
        que dejará de servir en cuanto reemplaces este archivo por el nuevo.
   ========================================================================== */
const CLAVE_ACCESO = 'NuevaMasVida7';

let unlocked = false;

function renderLock(){
  const app = document.getElementById('app');
  app.innerHTML = '';
  const wrap = el(`
    <div class="lock-card">
      <p class="brand-eyebrow">Isapre Nueva Mas Vida</p>
      <h1 class="section-title" style="margin-bottom:4px;">Acceso protegido</h1>
      <p class="section-sub">Ingresa la clave de acceso entregada por tu administrador.</p>
      <div class="field">
        <input type="password" id="clave-input" placeholder="Clave de acceso">
      </div>
      <p id="clave-error" style="color:var(--accent); font-size:13px; display:none; margin:-8px 0 12px;">Clave incorrecta. Intenta nuevamente.</p>
      <div class="nav-row" style="justify-content:flex-end;">
        <button class="nav-btn primary" id="btn-unlock">Ingresar →</button>
      </div>
    </div>
  `);
  app.appendChild(wrap);
  const input = wrap.querySelector('#clave-input');
  const err = wrap.querySelector('#clave-error');
  function tryUnlock(){
    if(input.value === CLAVE_ACCESO){
      unlocked = true;
      renderApp();
    } else {
      err.style.display='block';
      input.value='';
      input.focus();
    }
  }
  wrap.querySelector('#btn-unlock').addEventListener('click', tryUnlock);
  input.addEventListener('keydown', e=>{ if(e.key==='Enter') tryUnlock(); });
  setTimeout(()=>input.focus(), 50);
}

function getAsesorNombre(){
  try{ return localStorage.getItem('nmv_asesor_nombre') || ''; }catch(e){ return ''; }
}
function setAsesorNombre(v){
  try{ localStorage.setItem('nmv_asesor_nombre', v); }catch(e){}
}

function renderMasthead(){
  const d = date_display();
  const nombre = getAsesorNombre();
  const wrap = el(`
    <div class="masthead">
      <div>
        <p class="brand-eyebrow">Isapre Nueva Mas Vida</p>
        <h1>Ficha de entrevista telefónica</h1>
        <p class="advisor">
          Asesor:
          <input type="text" id="asesor-input" placeholder="Escribe tu nombre" value="${escapeAttr(nombre)}"
            style="border:none; border-bottom:1px dashed var(--ink-faint); background:transparent; font-size:13px; color:var(--ink-soft); padding:0 2px; width:150px; font-family:var(--font-body);">
          &middot; Evaluación de plan de salud
        </p>
      </div>
      <div class="meta">
        <strong>${fichaId()}</strong>
        ${d}
      </div>
    </div>
  `);
  const input = wrap.querySelector('#asesor-input');
  input.addEventListener('input', ()=>{ setAsesorNombre(input.value); });
  return wrap;
}

function date_display(){
  const now = new Date();
  return now.toLocaleDateString('es-CL', {day:'2-digit', month:'2-digit', year:'numeric'});
}

function renderPulse(){
  const wrap = el(`
    <div class="pulse-wrap">
      <div class="pulse-label">
        <span class="step-name" id="pulse-step-name"></span>
        <span class="step-count" id="pulse-step-count"></span>
      </div>
      <svg class="pulse" viewBox="0 0 600 46" preserveAspectRatio="none" id="pulse-svg"></svg>
      <div class="pulse-dots" id="pulse-dots"></div>
    </div>
  `);

  const stepNames = ['Datos', ...sections.map(s=>s.title)];
  const currentIdx = step; // 0..sections.length
  wrap.querySelector('#pulse-step-name').textContent = stepNames[currentIdx];
  wrap.querySelector('#pulse-step-count').textContent = `Bloque ${currentIdx+1} de ${sections.length+1}`;

  const totalDots = sections.length + 1;
  const dotsHtml = stepNames.map((n,i)=>`<span class="${i<=currentIdx?'on':''}">${i===0?'•':i}</span>`).join('');
  wrap.querySelector('#pulse-dots').innerHTML = dotsHtml;

  const svg = wrap.querySelector('#pulse-svg');
  svg.innerHTML = buildPulsePath(totalDots, currentIdx);
  return wrap;
}

function buildPulsePath(total, currentIdx){
  const w = 600, h = 46, midY = 23;
  const segW = w / total;
  let d = `M0 ${midY}`;
  for(let i=0;i<total;i++){
    const x0 = i*segW;
    const spikeX = x0 + segW*0.5;
    if(i === currentIdx){
      d += ` L${x0+segW*0.28} ${midY} L${spikeX-8} ${midY+16} L${spikeX} ${midY-20} L${spikeX+8} ${midY+10} L${x0+segW*0.72} ${midY}`;
    } else {
      d += ` L${x0+segW*0.42} ${midY} L${spikeX} ${midY-6} L${x0+segW*0.58} ${midY}`;
    }
  }
  d += ` L${w} ${midY}`;
  const doneW = (currentIdx / total) * w;
  return `
    <path d="${d}" fill="none" stroke="#DCE6E2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <clipPath id="clipdone"><rect x="0" y="0" width="${doneW + segW*0.5}" height="${h}"/></clipPath>
    <path d="${d}" fill="none" stroke="#E2603E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" clip-path="url(#clipdone)"/>
  `;
}

function renderClienteStep(){
  const wrap = el(`
    <div class="card">
      <p class="section-eyebrow">Ficha · datos generales</p>
      <h2 class="section-title">Datos del cliente</h2>
      <p class="section-sub">Confirma los datos básicos antes de comenzar la entrevista.</p>
      <div class="grid2" id="cliente-fields-a"></div>
      <div style="height:14px"></div>
      <div class="grid2" id="cliente-fields-b"></div>
      ${navRow(0)}
    </div>
  `);
  const bucket = state.cliente;
  const a = clienteFields.slice(0,4);
  const b = clienteFields.slice(4);
  wrap.querySelector('#cliente-fields-a').innerHTML = a.map(f=>renderField(f,bucket)).join('');
  wrap.querySelector('#cliente-fields-b').innerHTML = b.map(f=>renderField(f,bucket)).join('');
  attachSectionEvents(wrap, clienteFields, bucket, renderApp);
  wireNav(wrap, 0);
  return wrap;
}

function renderSectionStep(section){
  if(section.isCalculadora){
    return renderCalculadoraStep(section);
  }
  const wrap = el(`
    <div class="card">
      <p class="section-eyebrow">Bloque ${section.num} de ${sections.length}</p>
      <h2 class="section-title">${section.title}</h2>
      <p class="section-sub">${section.sub}</p>
      <div id="section-fields"></div>
      ${section.hasObservaciones ? `
        <div class="field" style="margin-top:22px; border-top:1px solid var(--line); padding-top:18px;">
          <label class="q">Observaciones</label>
          <textarea data-key="observaciones" rows="3" placeholder="Notas de este bloque...">${escapeHtml(state[section.id].observaciones||'')}</textarea>
        </div>` : ''}
      ${navRow(section.num)}
    </div>
  `);
  const bucket = state[section.id];
  const rerender = renderApp;
  wrap.querySelector('#section-fields').innerHTML = renderFieldsWithConditionals(section.fields, bucket, rerender);
  attachSectionEvents(wrap, section.fields, bucket, rerender);

  if(section.hasObservaciones){
    const obsTa = wrap.querySelector('textarea[data-key=observaciones]');
    obsTa.addEventListener('input', ()=>{ bucket.observaciones = obsTa.value; });
  }
  wireNav(wrap, section.num);
  return wrap;
}

function renderCalculadoraStep(section){
  const bucket = state.s7b;
  if(bucket.edad_titular === undefined){
    bucket.edad_titular = state.cliente.edad || '';
  }
  if(!bucket.cargas_edades) bucket.cargas_edades = [];
  if((bucket.uf_manual === undefined || bucket.uf_manual === '') && UF_VALOR){
    bucket.uf_manual = UF_VALOR;
  }

  const wrap = el(`
    <div class="card">
      <p class="section-eyebrow">Bloque ${section.num} de ${sections.length}</p>
      <h2 class="section-title">${section.title}</h2>
      <p class="section-sub">${section.sub}</p>
      <div id="calc-fields"></div>
      <div class="field">
        <label class="q">Edades de las cargas (si tiene)</label>
        <div id="cargas-list"></div>
        <button type="button" class="nav-btn" id="add-carga" style="margin-top:6px; padding:7px 14px; font-size:13px;">+ Agregar carga</button>
      </div>
      <div id="calc-results" style="margin-top:22px; border-top:1px solid var(--line); padding-top:18px;"></div>
      ${navRow(section.num)}
    </div>
  `);

  wrap.querySelector('#calc-fields').innerHTML = section.fields.map(f=>renderField(f,bucket)).join('');
  attachSectionEvents(wrap, section.fields, bucket, renderApp);

  const cargasList = wrap.querySelector('#cargas-list');
  function renderCargasList(){
    cargasList.innerHTML = bucket.cargas_edades.map((v,i)=>`
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
        <input type="number" min="0" max="120" data-carga-idx="${i}" value="${v===null||v===undefined?'':v}" placeholder="Edad" style="max-width:110px;">
        <button type="button" data-remove-idx="${i}" title="Quitar" style="border:1px solid var(--line); background:#fff; border-radius:7px; width:32px; height:32px; cursor:pointer; color:var(--ink-faint);">✕</button>
      </div>
    `).join('') || `<p class="hint" style="margin:0 0 6px;">Sin cargas registradas.</p>`;
    cargasList.querySelectorAll('input[data-carga-idx]').forEach(inp=>{
      inp.addEventListener('input', ()=>{
        bucket.cargas_edades[parseInt(inp.dataset.cargaIdx,10)] = inp.value;
        renderResults();
      });
    });
    cargasList.querySelectorAll('button[data-remove-idx]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        bucket.cargas_edades.splice(parseInt(btn.dataset.removeIdx,10),1);
        renderCargasList();
        renderResults();
      });
    });
  }
  wrap.querySelector('#add-carga').addEventListener('click', ()=>{
    if(bucket.cargas_edades.length >= 16) return;
    bucket.cargas_edades.push('');
    renderCargasList();
    renderResults();
  });

  const resultsBox = wrap.querySelector('#calc-results');
  function renderResults(){
    resultsBox.innerHTML = buildResultsHtml(bucket);
  }

  renderCargasList();
  renderResults();

  wrap.querySelectorAll('#calc-fields input[type=number]').forEach(node=>{
    node.addEventListener('input', renderResults);
  });

  wireNav(wrap, section.num);
  return wrap;
}

function fmtCLP(n){
  return '$' + Math.round(n).toLocaleString('es-CL');
}
function fmtUF(n){
  return n.toLocaleString('es-CL', {minimumFractionDigits:2, maximumFractionDigits:2}) + ' UF';
}

function planTableHtml(rows, target){
  if(!rows || !rows.length) return `<p class="hint" style="margin:4px 0;">Sin planes disponibles.</p>`;
  return `
    <table style="width:100%; border-collapse:collapse; margin-top:6px;">
      <thead>
        <tr style="border-bottom:1px solid var(--line);">
          <th style="text-align:left; padding:5px 6px; font-size:10.5px; color:var(--ink-faint); text-transform:uppercase; letter-spacing:.06em;">Línea</th>
          <th style="text-align:left; padding:5px 6px; font-size:10.5px; color:var(--ink-faint); text-transform:uppercase; letter-spacing:.06em;">Plan</th>
          <th style="text-align:right; padding:5px 6px; font-size:10.5px; color:var(--ink-faint); text-transform:uppercase; letter-spacing:.06em;">Valor final</th>
          <th style="text-align:right; padding:5px 6px; font-size:10.5px; color:var(--ink-faint); text-transform:uppercase; letter-spacing:.06em;">Dif. vs 7%</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(row=>`
          <tr>
            <td style="padding:6px; font-size:13px; color:var(--ink-soft);">${escapeHtml(row.grupo)}</td>
            <td style="padding:6px; font-size:13px; font-family:var(--font-mono);">${escapeHtml(row.code)}</td>
            <td style="padding:6px; font-size:13px; text-align:right; font-family:var(--font-mono);">${row.final.toFixed(3)} UF</td>
            <td style="padding:6px; font-size:13px; text-align:right; font-family:var(--font-mono); color:${row.final>target?'var(--accent)':'var(--good)'};">${row.final>=target?'+':'-'}${Math.abs(row.final-target).toFixed(3)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function buildResultsHtml(bucket){
  const r = calcularComparativo(bucket);

  let html = '';

  html += `<p class="hint" style="margin:0 0 10px;">
    ${r.ufOk ? `Valor UF usado: <strong style="color:var(--ink);">${fmtUF(r.uf)}</strong>${UF_STATUS==='ok' && (bucket.uf_manual===UF_VALOR || bucket.uf_manual==='') ? ' (obtenido automáticamente hoy)' : ' (ingresado manualmente)'}` :
      (UF_STATUS==='loading' ? 'Buscando el valor de la UF de hoy…' : 'No se pudo obtener la UF automáticamente: ingrésala manualmente arriba.')}
  </p>`;

  if(!r.rentaOk){
    html += `<p class="hint" style="margin:0;">Ingresa la renta imponible en el bloque 7 (Análisis económico) para calcular el 7% legal.</p>`;
    return html;
  }
  if(!r.ufOk){
    return html;
  }

  const l7 = r.legal7;
  html += `
    <div style="background:var(--primary-pale); border-radius:9px; padding:14px 16px; margin-bottom:16px;">
      <p style="margin:0 0 4px; font-size:13px; color:var(--ink-soft);">7% legal del titular (según renta imponible)</p>
      <p style="margin:0; font-family:var(--font-mono); font-size:20px; color:var(--primary-dark); font-weight:700;">
        ${fmtCLP(l7.montoClp)} <span style="font-size:14px; font-weight:500; color:var(--ink-soft);">≈ ${fmtUF(l7.montoUf)}</span>
      </p>
      ${l7.aplicaTope ? `<p class="hint" style="margin:6px 0 0;">La renta ingresada supera el tope imponible legal de ${TOPE_IMPONIBLE_UF} UF (${fmtCLP(l7.topeClp)}), por lo que el 7% se calculó sobre ese tope.</p>` : ''}
    </div>
  `;

  if(!r.edadOk){
    html += `<p class="hint" style="margin:0;">Ingresa la edad del titular para buscar los planes más cercanos.</p>`;
    return html;
  }

  html += `<p class="hint" style="margin:0 0 14px;">Factor titular ${r.factorTitular.toFixed(2)}${r.cargas.length ? ` · Factor cargas ${r.factorCargas.toFixed(2)} (${r.cargas.length} carga${r.cargas.length>1?'s':''})` : ''} · GES ${GES_FACTOR}</p>`;

  html += `<h4 style="font-family:var(--font-display); font-size:15px; color:var(--primary-dark); margin:0 0 6px;">Titular solo</h4>`;
  html += `<p class="hint" style="margin:0 0 4px;">Santiago (RM)</p>${planTableHtml(r.santiagoSolo, r.target)}`;
  html += `<p class="hint" style="margin:14px 0 4px;">Regiones</p>${planTableHtml(r.regionalSolo, r.target)}`;

  if(r.cargas.length){
    const m = r.masEconomicoConCargas;
    const supera = m.final > r.target;
    html += `
      <h4 style="font-family:var(--font-display); font-size:15px; color:var(--primary-dark); margin:22px 0 6px;">Titular con cargas</h4>
      <div style="background:${supera?'var(--accent-pale)':'var(--good-pale)'}; border-radius:9px; padding:10px 14px; margin-bottom:10px;">
        <p style="margin:0; font-size:13px; color:${supera?'#8a3a26':'var(--good)'};">
          El plan más económico disponible con las cargas incluidas cuesta <strong>${m.final.toFixed(3)} UF</strong> (${fmtCLP(m.final*r.uf)}),
          lo que ${supera?'supera':'está dentro de'} el 7% legal en <strong>${Math.abs(m.final-r.target).toFixed(3)} UF</strong> (${fmtCLP(Math.abs(m.final-r.target)*r.uf)}).
        </p>
      </div>
    `;
    html += `<p class="hint" style="margin:0 0 4px;">Santiago (RM)</p>${planTableHtml(r.santiagoConCargas, r.target)}`;
    html += `<p class="hint" style="margin:14px 0 4px;">Regiones</p>${planTableHtml(r.regionalConCargas, r.target)}`;
  }

  return html;
}


function navRow(currentStepIdx){
  const isFirst = currentStepIdx === 0;
  const isLast = currentStepIdx === sections.length;
  return `
    <div class="nav-row no-print">
      <button class="nav-btn" id="btn-prev" ${isFirst?'disabled':''}>&larr; Anterior</button>
      <span class="nav-jump">${fichaId()}</span>
      <button class="nav-btn primary" id="btn-next">${isLast ? 'Ver resumen final →' : 'Siguiente →'}</button>
    </div>
  `;
}

function wireNav(container, currentStepIdx){
  const prev = container.querySelector('#btn-prev');
  const next = container.querySelector('#btn-next');
  if(prev) prev.addEventListener('click', ()=>{ if(step>0){ step--; renderApp(); window.scrollTo(0,0);} });
  if(next) next.addEventListener('click', ()=>{ step++; renderApp(); window.scrollTo(0,0); });
}

/* ============ SUMMARY ============ */

function fmtVal(v, empty){
  empty = empty || 'Sin registrar';
  if(v === undefined || v === null || v === '') return `<span class="v empty">${empty}</span>`;
  if(Array.isArray(v)){
    if(v.length===0) return `<span class="v empty">${empty}</span>`;
    return `<span class="v">${v.map(escapeHtml).join(', ')}</span>`;
  }
  return `<span class="v">${escapeHtml(v)}</span>`;
}

function row(label, value){
  return `<div class="sum-row"><span class="k">${label}</span>${fmtVal(value)}</div>`;
}

function renderSummary(){
  const c = state.cliente;
  const wrap = el(`<div class="card"></div>`);
  let html = '';

  html += `
    <div class="summary-actions no-print">
      <button class="primary" id="btn-print"><span>Imprimir / guardar PDF</span></button>
      <button class="accent" id="btn-download"><span>Descargar resumen (.txt)</span></button>
      <button id="btn-back">← Volver a editar</button>
    </div>
  `;

  html += `<p class="section-eyebrow">Resumen final · ${fichaId()}</p>`;
  html += `<h2 class="section-title">Ficha completa del entrevistado</h2>`;
  html += `<p class="section-sub">Generada el ${date_display()} · Asesor ${escapeHtml(getAsesorNombre()||'(sin nombre)')}, Isapre Nueva Mas Vida</p>`;

  html += `<div class="sum-block"><h3>Datos del cliente</h3>
    ${row('Nombre', c.nombre)}
    ${row('Teléfono', c.telefono)}
    ${row('Correo electrónico', c.correo)}
    ${row('Edad', c.edad)}
    ${row('Comuna', c.comuna)}
    ${row('Profesión / actividad', c.profesion)}
    ${row('Empresa', c.empresa)}
    ${row('Fecha de entrevista', c.fecha)}
  </div>`;

  const s1 = state.s1;
  html += `<div class="sum-block"><h3>1. Romper el hielo</h3>
    ${row('Preguntas realizadas', ['q_como_estas','q_minutos','q_dedica','q_dependiente'].filter(k=>s1[k]).length + ' de 4')}
    ${row('Observaciones', s1.observaciones)}
  </div>`;

  const s2 = state.s2;
  html += `<div class="sum-block"><h3>2. Situación actual</h3>
    ${row('Sistema de salud', s2.sistema_salud)}
    ${row('Tiempo en la institución', s2.tiempo_institucion)}
    ${row('Por qué eligió ese plan', s2.por_que_eligio)}
    <div class="sum-row"><span class="k">Nivel de conformidad</span>${s2.conformidad ? `<span class="v"><span class="score-badge"><span class="num">${s2.conformidad}</span>/10</span></span>` : fmtVal(null)}</div>
  </div>`;

  const s3 = state.s3;
  html += `<div class="sum-block"><h3>3. Detectar dolores</h3>
    ${row('¿Reajustado alguna vez?', s3.reajustado)}
    ${s3.reajustado==='Sí' ? row('Cantidad de veces', s3.cuantas_veces) : ''}
    ${row('Lo que menos le gusta', mergeOther(s3.no_gusta, s3.__other_no_gusta))}
    ${row('¿Paga mucho vs beneficios?', s3.paga_mucho)}
    ${row('¿Conoce su cobertura?', s3.conoce_cobertura)}
    ${row('¿Sabe cuánto paga?', s3.sabe_cuanto_paga)}
    ${s3.sabe_cuanto_paga==='Sí' ? row('Monto aproximado', s3.monto_aprox) : ''}
  </div>`;

  const s4 = state.s4;
  html += `<div class="sum-block"><h3>4. Necesidades</h3>
    ${row('Clínica preferida', s4.clinica_preferida)}
    ${row('Cargas familiares', s4.cargas_familiares)}
    ${(s4.cargas_familiares||[]).includes('Hijos') ? row('Cantidad de hijos', s4.cantidad_hijos) : ''}
    ${row('Uso del plan', s4.uso_plan)}
    ${row('Qué utiliza más', mergeOther(s4.que_utiliza_mas, s4.__other_que_utiliza_mas))}
  </div>`;

  const s5 = state.s5;
  html += `<div class="sum-block"><h3>5. Conocimiento del sistema</h3>
    ${row('¿Sabe qué es GES?', s5.sabe_ges)}
    ${row('¿Sabe qué es CAEC?', s5.sabe_caec)}
    ${row('¿Conoce la Ley de Urgencia?', s5.conoce_ley_urgencia)}
    ${row('Hace cuánto no revisa su plan', s5.hace_cuanto_revisa)}
  </div>`;

  const s6 = state.s6;
  html += `<div class="sum-block"><h3>6. Oportunidad de cambio</h3>
    ${row('¿Le interesaría conocer un plan mejor?', s6.interesa_conocer)}
    ${row('Lo más importante para él/ella', s6.que_importante)}
  </div>`;

  const s7 = state.s7;
  html += `<div class="sum-block"><h3>7. Análisis económico</h3>
    ${row('Renta imponible aproximada', s7.renta_imponible)}
    ${row('¿Conoce el valor de su 7%?', s7.conoce_7)}
    ${row('¿Dispuesto a invertir más?', s7.dispuesto_invertir)}
  </div>`;

  const s7b = state.s7b;
  html += `<div class="sum-block"><h3>Calculador de planes (7% legal y planes cercanos)</h3>
    ${row('Edad del titular', s7b.edad_titular)}
    ${row('Edades de las cargas', (s7b.cargas_edades||[]).filter(a=>a!==''&&a!=null))}
    ${buildResultsSummaryHtml(s7b)}
  </div>`;

  const s8 = state.s8;
  html += `<div class="sum-block"><h3>8. Beneficios de interés</h3>
    ${row('Seleccionados', s8.beneficios)}
  </div>`;

  const s9 = state.s9;
  html += `<div class="sum-block"><h3>9. Cierre</h3>
    ${row('¿Quiere estudio comparativo gratuito?', s9.estudio_comparativo)}
    ${row('Documentos a solicitar', s9.documentos)}
    ${row('Fecha propuesta', s9.fecha_propuesta)}
    ${row('Hora propuesta', s9.hora_propuesta)}
  </div>`;

  const s10 = state.s10;
  html += `<div class="sum-block"><h3>Observaciones del asesor</h3>
    <div class="obs-box">${s10.obs_asesor ? escapeHtml(s10.obs_asesor) : 'Sin observaciones registradas.'}</div>
  </div>`;

  wrap.innerHTML = html;

  wrap.querySelector('#btn-print').addEventListener('click', ()=>window.print());
  wrap.querySelector('#btn-download').addEventListener('click', downloadSummary);
  wrap.querySelector('#btn-back').addEventListener('click', ()=>{ step = sections.length; renderApp(); window.scrollTo(0,0); });

  return wrap;
}

function buildResultsSummaryHtml(bucket){
  const r = calcularComparativo(bucket);
  if(!r.rentaOk){
    return `<p class="hint" style="margin:6px 0 0;">Sin renta imponible registrada: no fue posible calcular el 7% legal.</p>`;
  }
  if(!r.ufOk){
    return `<p class="hint" style="margin:6px 0 0;">Sin valor de UF disponible: no fue posible calcular el 7% legal.</p>`;
  }
  let html = `<div class="sum-row"><span class="k">7% legal (según renta)</span><span class="v">${fmtCLP(r.legal7.montoClp)} · ${fmtUF(r.legal7.montoUf)}</span></div>`;
  if(!r.edadOk){
    html += `<p class="hint" style="margin:6px 0 0;">Sin edad del titular registrada: no fue posible buscar planes.</p>`;
    return html;
  }
  const fmt = (arr) => arr && arr.length ? arr.map(row=>`${row.grupo} · ${row.code} · ${row.final.toFixed(3)} UF`).join('<br>') : 'Sin datos';
  html += `<div class="sum-row"><span class="k">Titular solo · Santiago</span><span class="v">${fmt(r.santiagoSolo)}</span></div>`;
  html += `<div class="sum-row"><span class="k">Titular solo · Regiones</span><span class="v">${fmt(r.regionalSolo)}</span></div>`;
  if(r.cargas.length){
    html += `<div class="sum-row"><span class="k">Titular con cargas · Santiago</span><span class="v">${fmt(r.santiagoConCargas)}</span></div>`;
    html += `<div class="sum-row"><span class="k">Titular con cargas · Regiones</span><span class="v">${fmt(r.regionalConCargas)}</span></div>`;
    const m = r.masEconomicoConCargas;
    const supera = m.final > r.target;
    html += `<div class="sum-row"><span class="k">Costo con cargas vs. 7%</span><span class="v">${m.final.toFixed(3)} UF (${supera?'supera':'dentro de'} el 7% en ${Math.abs(m.final-r.target).toFixed(3)} UF)</span></div>`;
  }
  return html;
}

function mergeOther(arr, other){
  const a = arr ? [...arr] : [];
  if(other) a.push(other);
  return a;
}

function downloadSummary(){
  const c = state.cliente;
  const s1=state.s1, s2=state.s2, s3=state.s3, s4=state.s4, s5=state.s5, s6=state.s6, s7=state.s7, s7b=state.s7b, s8=state.s8, s9=state.s9, s10=state.s10;
  const L = (label, val) => {
    let v = val;
    if(Array.isArray(v)) v = v.length ? v.join(', ') : 'Sin registrar';
    if(v === undefined || v === null || v === '') v = 'Sin registrar';
    return `${label}: ${v}`;
  };
  const lines = [];
  lines.push('FICHA DE ENTREVISTA TELEFÓNICA');
  lines.push('Evaluación de Plan de Salud');
  lines.push(`Asesor: ${getAsesorNombre() || '(sin nombre)'} – Isapre Nueva Mas Vida`);
  lines.push(`Ficha: ${fichaId()}    Fecha de generación: ${date_display()}`);
  lines.push('');
  lines.push('DATOS DEL CLIENTE');
  lines.push(L('Nombre', c.nombre));
  lines.push(L('Teléfono', c.telefono));
  lines.push(L('Correo electrónico', c.correo));
  lines.push(L('Edad', c.edad));
  lines.push(L('Comuna', c.comuna));
  lines.push(L('Profesión / actividad', c.profesion));
  lines.push(L('Empresa', c.empresa));
  lines.push(L('Fecha de la entrevista', c.fecha));
  lines.push('');
  lines.push('1. ROMPER EL HIELO');
  lines.push(L('Preguntas realizadas', ['q_como_estas','q_minutos','q_dedica','q_dependiente'].filter(k=>s1[k]).length + ' de 4'));
  lines.push(L('Observaciones', s1.observaciones));
  lines.push('');
  lines.push('2. SITUACIÓN ACTUAL');
  lines.push(L('Sistema de salud', s2.sistema_salud));
  lines.push(L('Tiempo en la institución', s2.tiempo_institucion));
  lines.push(L('Por qué eligió ese plan', s2.por_que_eligio));
  lines.push(L('Nivel de conformidad (1-10)', s2.conformidad));
  lines.push('');
  lines.push('3. DETECTAR DOLORES');
  lines.push(L('¿Reajustado alguna vez?', s3.reajustado));
  if(s3.reajustado==='Sí') lines.push(L('Cantidad de veces', s3.cuantas_veces));
  lines.push(L('Lo que menos le gusta', mergeOther(s3.no_gusta, s3.__other_no_gusta)));
  lines.push(L('¿Paga mucho vs beneficios?', s3.paga_mucho));
  lines.push(L('¿Conoce su cobertura?', s3.conoce_cobertura));
  lines.push(L('¿Sabe cuánto paga?', s3.sabe_cuanto_paga));
  if(s3.sabe_cuanto_paga==='Sí') lines.push(L('Monto aproximado', s3.monto_aprox));
  lines.push('');
  lines.push('4. NECESIDADES');
  lines.push(L('Clínica preferida', s4.clinica_preferida));
  lines.push(L('Cargas familiares', s4.cargas_familiares));
  if((s4.cargas_familiares||[]).includes('Hijos')) lines.push(L('Cantidad de hijos', s4.cantidad_hijos));
  lines.push(L('Uso del plan', s4.uso_plan));
  lines.push(L('Qué utiliza más', mergeOther(s4.que_utiliza_mas, s4.__other_que_utiliza_mas)));
  lines.push('');
  lines.push('5. CONOCIMIENTO DEL SISTEMA');
  lines.push(L('¿Sabe qué es GES?', s5.sabe_ges));
  lines.push(L('¿Sabe qué es CAEC?', s5.sabe_caec));
  lines.push(L('¿Conoce la Ley de Urgencia?', s5.conoce_ley_urgencia));
  lines.push(L('Hace cuánto no revisa su plan', s5.hace_cuanto_revisa));
  lines.push('');
  lines.push('6. OPORTUNIDAD DE CAMBIO');
  lines.push(L('¿Le interesaría conocer un plan mejor?', s6.interesa_conocer));
  lines.push(L('Lo más importante para él/ella', s6.que_importante));
  lines.push('');
  lines.push('7. ANÁLISIS ECONÓMICO');
  lines.push(L('Renta imponible aproximada', s7.renta_imponible));
  lines.push(L('¿Conoce el valor de su 7%?', s7.conoce_7));
  lines.push(L('¿Dispuesto a invertir más?', s7.dispuesto_invertir));
  lines.push('');
  lines.push('CALCULADOR DE PLANES (7% legal y planes cercanos)');
  lines.push(L('Edad del titular', s7b.edad_titular));
  lines.push(L('Edades de las cargas', (s7b.cargas_edades||[]).filter(a=>a!==''&&a!=null)));
  const rC = calcularComparativo(s7b);
  if(!rC.rentaOk){
    lines.push('  Sin renta imponible registrada: no fue posible calcular el 7% legal.');
  } else if(!rC.ufOk){
    lines.push('  Sin valor de UF disponible: no fue posible calcular el 7% legal.');
  } else {
    lines.push(`  7% legal (según renta): ${fmtCLP(rC.legal7.montoClp)} (${fmtUF(rC.legal7.montoUf)})`);
    if(rC.legal7.aplicaTope) lines.push(`  * Renta supera el tope imponible de ${TOPE_IMPONIBLE_UF} UF; el 7% se calculó sobre el tope.`);
    if(!rC.edadOk){
      lines.push('  Sin edad del titular registrada: no fue posible buscar planes.');
    } else {
      const printGroup = (titulo, rows) => {
        lines.push(`  ${titulo}:`);
        (rows||[]).forEach(row=> lines.push(`    - ${row.grupo} · ${row.code} · ${row.final.toFixed(3)} UF (dif. ${(row.final>=rC.target?'+':'-')}${Math.abs(row.final-rC.target).toFixed(3)})`));
      };
      printGroup('Titular solo · Santiago', rC.santiagoSolo);
      printGroup('Titular solo · Regiones', rC.regionalSolo);
      if(rC.cargas.length){
        const m = rC.masEconomicoConCargas;
        const supera = m.final > rC.target;
        lines.push(`  Costo más económico con cargas: ${m.final.toFixed(3)} UF (${fmtCLP(m.final*rC.uf)}), ${supera?'supera':'dentro de'} el 7% en ${Math.abs(m.final-rC.target).toFixed(3)} UF`);
        printGroup('Titular con cargas · Santiago', rC.santiagoConCargas);
        printGroup('Titular con cargas · Regiones', rC.regionalConCargas);
      }
    }
  }
  lines.push('');
  lines.push('8. BENEFICIOS DE INTERÉS');
  lines.push(L('Seleccionados', s8.beneficios));
  lines.push('');
  lines.push('9. CIERRE');
  lines.push(L('¿Quiere estudio comparativo gratuito?', s9.estudio_comparativo));
  lines.push(L('Documentos a solicitar', s9.documentos));
  lines.push(L('Fecha propuesta', s9.fecha_propuesta));
  lines.push(L('Hora propuesta', s9.hora_propuesta));
  lines.push('');
  lines.push('OBSERVACIONES DEL ASESOR');
  lines.push(s10.obs_asesor || 'Sin observaciones registradas.');

  const blob = new Blob([lines.join('\n')], {type:'text/plain;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  const safeName = (c.nombre || 'entrevista').toLowerCase().replace(/[^a-z0-9]+/g,'_');
  a.download = `ficha_${safeName}_${fichaId()}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

fetchUFValue();
renderLock();
