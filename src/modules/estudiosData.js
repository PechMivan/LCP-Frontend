import autoinmuno from "/assets/img/estudios/autoinmuno.png";
import biologia_molecular from "/assets/img/estudios/biologia_molecular.png";
import coagulacion from "/assets/img/estudios/coagulacion.png";
import copro from "/assets/img/estudios/copro.png";
import enfermedad_respiratoria from "/assets/img/estudios/enfermedad_respiratoria.png";
import hematologia from "/assets/img/estudios/hematologia.png";
import hormonal from "/assets/img/estudios/hormonal.png";
import inmuno from "/assets/img/estudios/inmuno.png";
import microbio from "/assets/img/estudios/microbio.png";
import quimica_clinica from "/assets/img/estudios/quimica_clinica.png";
import serologia from "/assets/img/estudios/serologia.png";
import urologia from "/assets/img/estudios/urologia.png";
export const categorias = [
  {
    icono: autoinmuno,
    especialidad: "AUTOINMUNIDAD",
    estudios: [
      { nombre: "AC ANTI BETA 2 GLICOPROTEÍNA IGG E IGM", precio: "1300.00"},
      { nombre: "AC ANTI CARDIOLIPINAS IGG E IGM", precio: "1200.00"},
      { nombre: "ANTICOAGULANTE LÚPICO", precio: "700.00"},
      { nombre: "PERFIL ENA", precio: "3054.00"},
      { nombre: "PERFIL VASCULITIS", precio: "2100.00"}
    ],
  },
  {
    icono: biologia_molecular,
    especialidad: "BIOLOGIA MOLECULAR",
    estudios: [
      { nombre: "PCR VIRUS PAPILOMA HUMANO (VPH) 14 GENOTIPOS", precio: "2900.00"}
    ],
  },
  {
    icono: coagulacion,
    especialidad: "COAGULACION",
    estudios: [
      { nombre: "DIMERO D", precio: "600.00"},
      { nombre: "TIEMPOS DE COAGULACION", precio: "200.00"}
    ],
  },
  {
    icono: copro,
    especialidad: "COPROANALISIS",
    estudios: [
      { nombre: "AMOEBA EN FRESCO", precio: "65.00"},
      { nombre: "CITOLOGIA EN MOCO FECAL", precio: "85.00"},
      { nombre: "COPROLOGICO", precio: "320.00"},
      { nombre: "COPROPARASITOSCOPICO (CPS)", precio: "80.00"},
      { nombre: "COPROPARASITOSCOPICO SERIADO (3 MUESTRAS)", precio: "240.00"},
      { nombre: "SANGRE OCULTA EN HECES (GUAYACO)", precio: "80.00"},
    ],
  },
  {
    icono: enfermedad_respiratoria,
    especialidad: "ENFERMEDAD RESPIRATORIA AGUDA",
    estudios: [
      { nombre: "AG VIRUS SINCITIAL RESPIRATORIO", precio: "750.00"},
      { nombre: "ANTIGENO DE SARS COV.2", precio: "350.00"},
      { nombre: "PRUEBA RAPIDA DE INFLUENZA", precio: "750.00"},
    ],
  },
  {
    icono: hematologia,
    especialidad: "HEMATOLOGIA",
    estudios: [
      { nombre: "BIOMETRIA HEMATICA", precio: "120.00"},
      { nombre: "RETICULOCITOS EN SANGRE PERIFERICA", precio: "65.00"},
      { nombre: "SUBPOBLACIÓN DE LINFOCITOS (CD3, CD4 Y CD8)", precio: "2500.00"},
    ],
  },
  {
    icono: hormonal,
    especialidad: "HORMONAL",
    estudios: [
      { nombre: "ANDROSTENEDIONA", precio: "550.00"},
      { nombre: "DEHIDROEPIANDROSTERONA TOTAL (DHEA-S)", precio: "400.00"},
    ],
  },
  {
    icono: inmuno,
    especialidad: "INMUNOLOGIA",
    estudios: [
      { nombre: "AC ANTI CITOMEGALOVIRUS IGG E IGM", precio: "558.00"},
      { nombre: "AC ANTI HEPATITIS A IGG E IGM", precio: "470.00"},
      { nombre: "AC ANTI HEPATITIS C TOTALES", precio: "396.00"},
      { nombre: "AC ANTI TOXOPLASMA IGG E IGM", precio: "558.00"},
      { nombre: "AC ANTI VIH 1 Y 2", precio: "300.00"},
      { nombre: "ANTIGENO CARCINOEMBRIONARIO", precio: "300.00"},
      { nombre: "COMPLEMENTO C3 Y C4", precio: "670.00"},
      { nombre: "COOMBS DIRECTO", precio: "160.00"},
      { nombre: "COOMBS INDIRECTO", precio: "250.00"},
      { nombre: "ESTRADIOL", precio: "310.00"},
      { nombre: "FERRITINA", precio: "300.00"},
      { nombre: "FRACCION BETA DE LA GONADOTROPINA CORIONICA HUMANA", precio: "320.00"},
      { nombre: "HORMONA ESTIMULANTE DE LA TIROIDES (TSH)", precio: "292.00"},
      { nombre: "HORMONA ESTIMULANTE DE LOS FOLÍCULOS (FSH)", precio: "310.00"},
      { nombre: "HORMONA LUTEINIZANTE (LH)", precio: "310.00"},
      { nombre: "INMUNOGLOBULINA A (IGA)", precio: "230.00"},
      { nombre: "INMUNOGLOBULINA E (IGE)", precio: "245.00"},
      { nombre: "INMUNOGLOBULINA G (IGG)", precio: "230.00"},
      { nombre: "INMUNOGLOBULINA M (IGM)", precio: "230.00"},
      { nombre: "INSULINA SERICA", precio: "300.00"},
      { nombre: "PERFIL DE AC ANTI VIRUS EPSTEIN BARR", precio: "1968.00"},
      { nombre: "PERFIL DE ALERGENOS INHALATORIOS", precio: "3000.00"},
      { nombre: "PERFIL DE HIERRO COMPLETO (FERRITINA Y TRANSFERRINA)", precio: "800.00"},
      { nombre: "PERFIL DE INMUNOGLOBULINAS (A-G-M)", precio: "700.00"},
      { nombre: "PERFIL HORMONAL GINECOLOGICO", precio: "1200.00"},
      { nombre: "PERFIL TIROIDEO COMPLETO", precio: "685.00"},
      { nombre: "PERFIL TIROIDEO I", precio: "385.00"},
      { nombre: "PERFIL TIROIDEO II", precio: "475.00"},
      { nombre: "PERFIL TORCH IGG", precio: "1400.00"},
      { nombre: "PERFIL TORCH IGG E IGM", precio: "2600.00"},
      { nombre: "PERFIL TORCH IGM", precio: "1400.00"},
      { nombre: "PROCALCITONINA", precio: "1000.00"},
      { nombre: "PROGESTERONA", precio: "310.00"},
      { nombre: "PROLACTINA", precio: "310.00"},
      { nombre: "PSA TOTAL", precio: "350.00"},
      { nombre: "TESTOSTERONA LIBRE", precio: "430.00"},
      { nombre: "TESTOSTERONA TOTAL", precio: "310.00"},
      { nombre: "VITAMINA D", precio: "700.00"},
      { nombre: "WESTERN BLOT VIH (PRUEBA CONFIRMATORIA)", precio: "2640.00"}
    ],
  },
  {
    icono: microbio,
    especialidad: "MICROBIOLOGIA",
    estudios: [
      { nombre: "AG DE GIARDIA/ CRYPTOSPORIDIUM EN HECES", precio: "600.00"},
      { nombre: "ANTÍGENO DE HELICOBACTER PYLORI EN HECES", precio: "600.00"},
      { nombre: "BAAR (1 MUESTRA)", precio: "600.00"},
      { nombre: "BAAR SERIADO (3 MUESTRAS)", precio: "310.00"},
      { nombre: "COPROCULTIVO", precio: "350.00"},
      { nombre: "CULTIVO DE EXUDADO VAGINAL", precio: "350.00"},
      { nombre: "EOSINOFILOS EN MOCO NASAL", precio: "80.00"},
      { nombre: "EXUDADO FARINGEO", precio: "350.00"},
      { nombre: "UROCULTIVO", precio: "360.00"}
    ],
  },
  {
    icono: quimica_clinica,
    especialidad: "QUIMICA CLINICA",
    estudios: [
      { nombre: "ALT (TGP)", precio: "85.00" },
      { nombre: "AST(TGO)", precio: "85.00" },
      {
        nombre: "BILIRRUBINAS (TOTAL, DIRECTA E INDIRECTA)",
        precio: "150.00",
      },
      { nombre: "CALCIO SÉRICO", precio: "80.00" },
      { nombre: "CLORO SÉRICO", precio: "80.00" },
      { nombre: "COLESTEROL TOTAL", precio: "80.00" },
      { nombre: "CPK Y CK-MB", precio: "260.00" },
      { nombre: "CREATINFOSFOQUINASA (CPK)", precio: "145.00" },
      { nombre: "CREATINFOSFOQUINASA FRACCION MB (CK-MB)", precio: "160.00" },
      {
        nombre: "CURVA DE TOLERANCIA A LA GLUCOSA 2 HORAS",
        precio: "365.00",
      },
      { nombre: "ELECTROLITOS DE 6", precio: "480.00" },
      {
        nombre: "ELECTROLITOS SERICOS (SODIO, POTASIO Y CLORO)",
        precio: "265.00",
      },
      { nombre: "FOSFORO SERICO", precio: "80.00" },
      { nombre: "GLUCOSA SERICA", precio: "80.00" },
      { nombre: "GLUCOSA, COLESTEROL Y TRIGLICERIDOS", precio: "150.00" },
      { nombre: "HEMOGLOBINA GLICOSILADA", precio: "250.00" },
      { nombre: "HIERRO SERICO", precio: "120.00" },
      { nombre: "LACTATO DESHIDROGENASA (LDH)", precio: "125.00" },
      { nombre: "MAGNESIO SÉRICO", precio: "80.00" },
      { nombre: "PERFIL DE LIPIDOS", precio: "280.00" },
      { nombre: "POTASIO SÉRICO", precio: "80.00" },
      { nombre: "PROTEINAS TOTALES", precio: "90.00" },
      { nombre: "PRUEBAS DE FUNCIONAMIENTO HEPATICO", precio: "365.00" },
      { nombre: "QUÍMICA SANGUÍNEA DE 18 ELEMENTOS", precio: "630.00" },
      { nombre: "QUÍMICA SANGUÍNEA DE 24", precio: "800.00" },
      { nombre: "QUÍMICA SANGUÍNEA DE 27 ELEMENTOS", precio: "1000.00" },
      { nombre: "QUÍMICA SANGUÍNEA DE 30 ELEMENTOS", precio: "1200.00" },
      { nombre: "QUIMICA SANGUÍNEA DE 12 ELEMENTOS", precio: "420.00" },
      { nombre: "QUIMICA SANGUINEA 45 ELEMENTOS", precio: "1500.00" },
      { nombre: "QUIMICA SANGUINEA DE 3 ELEMENTOS", precio: "170.00" },
      { nombre: "QUIMICA SANGUINEA DE 4 ELEMENTOS", precio: "200.00" },
      { nombre: "QUIMICA SANGUINEA DE 6 ELEMENTOS", precio: "265.00" },
      { nombre: "SODIO SÉRICO", precio: "80.00" },
    ],
  },
  {
    icono: serologia,
    especialidad: "SEROLOGIA",
    estudios: [
      { nombre : "ANTIDOPING 5 ELEMENTOS" , precio : "500.00" },
      { nombre : "ANTIESTREPTOLISINAS (ASO)" , precio : "120.00" },
      { nombre : "ANTIGENO DE SUPERFICIE HEPATITIS B" , precio : "430.00" },
      { nombre : "DENGUE DUO AG NS1 IGG E IGM" , precio : "500.00" },
      { nombre : "FACTOR REUMATOIDE" , precio : "110.00" },
      { nombre : "GRUPO SANGUINEO Y FACTOR RH" , precio : "80.00" },
      { nombre : "PERFIL REUMATICO" , precio : "390.00" },
      { nombre : "PROTEINA C REACTIVA" , precio : "120.00" },
      { nombre : "PRUEBA DE EMBARAZO CUALITATIVA" , precio : "150.00" },
      { nombre : "REACCIONES FEBRILES" , precio : "150.00" },
      { nombre : "REACCIONES LUETICAS (V.D.R.L)" , precio : "120.00" },
      { nombre : "V.D.R.L" , precio : "110.00" },
      { nombre : "VELOCIDAD DE SEDIMENTACION GLOBULAR" , precio : "90.00" }
    ],
  },
  {
    icono: urologia,
    especialidad: "UROANÁLISIS",
    estudios: [
      { nombre : "EXAMEN GENERAL DE ORINA" , precio : "80.00" },
    ],
  },
];