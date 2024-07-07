const medicos = [
    
  {
    id: "09-0999-0999",
    nombre: "José Aguilar Brenes",
    especialidad: "Ortopedia",
    ubicacion: "Av. 10, Cartago, Clínica Médica Cartago Central",
    horarios: "Martes a Sábado: 9am - 6pm",
    contacto: {
      telefono: "+506 8888-9999",
      email: "josuemarin2009@hotmail.com"
    },
    resenas: [
      { usuario: "Paciente13", calificacion: 4, comentario: "Buena atención y explicación detallada de mi lesión.<br>" },
      { usuario: "Paciente14", calificacion: 5, comentario: "El Dr. José es muy hábil y me ayudó a recuperarme rápidamente de mi cirugía." }
    ],
    biografia: "El Dr. José Aguilar es un ortopedista especializado en el tratamiento de lesiones y trastornos musculoesqueléticos. Ofrece opciones de tratamiento innovadoras y personalizadas para mejorar la movilidad y la calidad de vida de sus pacientes."
  },
    {
      id: "02-0222-0222",
      nombre: "María Gómez Sojo",
      especialidad: "Pediatría",
      ubicacion: "Calle 5, San José, Distrito Médico Los Ángeles",
      horarios: "Lunes a Sábado: 9am - 6pm",
      contacto: {
        telefono: "+506 2222-8787",
        email: "blackride1988@gmail.com"
      },
      resenas: [
        { usuario: "Usuario3", calificacion: 5, comentario: "La Dra. María es muy amable y atenta con los niños.<br>" },
        { usuario: "Usuario4", calificacion: 3, comentario: "Buena médica, pero a veces hay que esperar mucho en la sala de espera." }
      ],
      biografia: "La Dra. María Gómez se especializa en el cuidado de la salud de los niños..."
    },
    {
      id: "03-0333-0333",
        nombre: "Lisandro Arguedas Masís",
        especialidad: "Medicina General",
        ubicacion: "Paseo Colón 789, San José, Centro de Especialidades Médicas San Lucas",
        horarios: "Lunes a Viernes: 9am - 6pm",
        contacto: {
          telefono: "+506 2222-3333",
          email: "lisandroarguedas@gmail.com"
        },
        resenas: [
          { usuario: "Paciente1", calificacion: 5, comentario: "Excelente médico, muy atento y profesional.<br>" },
          { usuario: "Paciente2", calificacion: 4, comentario: "Buena atención, resolvió todas mis dudas." }
        ],
        biografia: "El Dr. Lisandro Arguedas es un médico general con una amplia experiencia en el cuidado de pacientes de todas las edades. Se especializa en diagnósticos precisos y tratamientos efectivos para una variedad de condiciones médicas."
      },
      {
        id: "01-0111-0111",
        nombre: "Juan Pérez Aguilar",
        especialidad: "Cardiología",
        ubicacion: "Ave. Central 123, San José, Barrio Médico",
        horarios: "Lunes a Viernes: 8am - 5pm",
        contacto: {
          telefono: "+506 2222-1212",
          email: "juanperez@gmail.com"
        },
        resenas: [
          { usuario: "Usuario1", calificacion: 5, comentario: "Excelente médico, muy profesional. <br>" },
          { usuario: "Usuario2", calificacion: 4, comentario: "Buen trato, me sentí muy cómodo durante la consulta." }
        ],
        biografia: "El Dr. Juan Pérez es un cardiólogo con más de 10 años de experiencia..."
      },
      {
        id: "05-0555-0555",
        nombre: "Andrés Rojas Hernández",
        especialidad: "Oftalmología",
        ubicacion: "Calle 1, Heredia, Centro de Salud Familiar San Rafael",
        horarios: "Martes a Sábado: 10am - 6pm",
        contacto: {
          telefono: "+506 9999-0000",
          email: "andresrojas@gmail.com"
        },
        resenas: [
          { usuario: "Paciente5", calificacion: 5, comentario: "El Dr. Andrés es muy profesional y me realizó una excelente cirugía de cataratas.<br>" },
          { usuario: "Paciente6", calificacion: 4, comentario: "Buena atención y explicación clara sobre mi tratamiento." }
        ],
        biografia: "El Dr. Andrés Rojas es un oftalmólogo especializado en el diagnóstico y tratamiento de enfermedades oculares. Su objetivo es proporcionar a sus pacientes una visión clara y una mejor calidad de vida."
      },
      {
        id: "06-0666-0666",
        nombre: "Laura Chacón Marín",
        especialidad: "Ginecología",
        ubicacion: "Av. Central 456, Heredia, Consultorio Médico Los Pinos",
        horarios: "Lunes a Viernes: 9am - 5pm",
        contacto: {
          telefono: "+506 4444-5555",
          email: "laurachacon@gmail.com"
        },
        resenas: [
          { usuario: "Paciente7", calificacion: 4, comentario: "Excelente atención y explicación clara sobre mi situación.<br>" },
          { usuario: "Paciente8", calificacion: 5, comentario: "La Dra. Laura es muy profesional y me hizo sentir cómoda durante la consulta." }
        ],
        biografia: "La Dra. Laura Chacón es una ginecóloga dedicada al cuidado de la salud reproductiva de las mujeres. Ofrece servicios médicos personalizados y compasivos para mujeres de todas las edades."
      },
      {
        id: "04-0444-0444",
        nombre: "Sofía Mora Vargas",
        especialidad: "Dermatología",
        ubicacion: "Av. 2, San José, Clínica Médica Integral del Este",
        horarios: "Lunes a Viernes: 8am - 4pm",
        contacto: {
          telefono: "+506 7777-8888",
          email: "sofiamora@gmail.com"
        },
        resenas: [
          { usuario: "Paciente3", calificacion: 5, comentario: "La Dra. Sofía es muy profesional y me ayudó con mi problema de piel.<br>" },
          { usuario: "Paciente4", calificacion: 4, comentario: "Excelente atención y resultados rápidos en mi tratamiento." }
        ],
        biografia: "La Dra. Sofía Mora es una dermatóloga experta en el tratamiento de enfermedades de la piel, cabello y uñas. Su enfoque es proporcionar cuidado de alta calidad y personalizado a cada paciente."
      },
      {
        id: "07-0777-0777",
        nombre: "Javier Morales Garbanzo",
        especialidad: "Pediatría",
        ubicacion: "Calle Principal 789, Alajuela, Clínica Especializada La Aurora",
        horarios: "Lunes a Sábado: 10am - 7pm",
        contacto: {
          telefono: "+506 7777-9999",
          email: "javiermorales@gmail.com"
        },
        resenas: [
          { usuario: "Paciente9", calificacion: 5, comentario: "El Dr. Javier es muy amable y atento con los niños.<br>" },
          { usuario: "Paciente10", calificacion: 4, comentario: "Buen médico, siempre resuelve nuestras dudas." }
        ],
        biografia: "El Dr. Javier Morales es un pediatra comprometido con el bienestar de los niños y adolescentes. Proporciona atención médica integral y personalizada para garantizar un desarrollo saludable."
      },
      {id: "08-0888-0888",
        nombre: "Ana Navarro Solís",
        especialidad: "Neurología",
        ubicacion: "Paseo de las Flores 1011, Alajuela, Centro Médico San Miguel",
        horarios: "Lunes a Viernes: 8am - 4pm",
        contacto: {
          telefono: "+506 6666-7777",
          email: "ananavarro@gmail.com"
        },
        resenas: [
          { usuario: "Paciente11", calificacion: 5, comentario: "La Dra. Ana es muy profesional y me ayudó a controlar mis migrañas.<br>" },
          { usuario: "Paciente12", calificacion: 4, comentario: "Excelente atención y seguimiento de mi tratamiento." }
        ],
        biografia: "La Dra. Ana Navarro es una neuróloga con experiencia en el diagnóstico y tratamiento de trastornos del sistema nervioso. Su enfoque es brindar atención de alta calidad y compasión a sus pacientes."
      },
      
      {
        id: "01-0101-0101",
        nombre: "Claudia Solano Saenz",
        especialidad: "Oncología",
        ubicacion: "Calle 3, Cartago, Consultorio Médico La Paz",
        horarios: "Lunes a Viernes: 8am - 5pm",
        contacto: {
          telefono: "+506 1111-2222",
          email: "claudiasolano@gmail.com"
        },
        resenas: [
          { usuario: "Paciente15", calificacion: 5, comentario: "La Dra. Claudia es muy empática y me brindó un gran apoyo durante mi tratamiento.<br>" },
          { usuario: "Paciente16", calificacion: 4, comentario: "Excelente médico, muy dedicado a sus pacientes." }
        ],
        biografia: "La Dra. Claudia Solano es una oncóloga con experiencia en el diagnóstico y tratamiento del cáncer. Su objetivo es proporcionar atención integral y compasiva a los pacientes y sus familias."
      },
      {
        id: "02-0202-0202",
        nombre: "Carlos Vargas Badilla",
        especialidad: "Psiquiatría",
        ubicacion: "Av. 6, Limón, Centro de Salud del Caribe",
        horarios: "Lunes a Sábado: 10am - 6pm",
        contacto: {
          telefono: "+506 3333-4444",
          email: "carlosvargas@gmail.com"
        },
        resenas: [
          { usuario: "Paciente17", calificacion: 4, comentario: "Buena atención y seguimiento de mi tratamiento.<br>" },
          { usuario: "Paciente18", calificacion: 5, comentario: "El Dr. Carlos es muy comprensivo y me ha ayudado mucho con mis problemas de ansiedad." }
        ],
        biografia: "El Dr. Carlos Vargas es un psiquiatra comprometido con el bienestar mental de sus pacientes. Ofrece evaluaciones exhaustivas y tratamientos efectivos para una variedad de trastornos psiquiátricos."
      },
      {
        id: "03-0303-0303",
        nombre: "Marcela Gutiérrez Daniels",
        especialidad: "Endocrinología",
        ubicacion: "Calle 8, Limón, Clínica Especializada Limón Norte",
        horarios: "Lunes a Viernes: 9am - 5pm",
        contacto: {
          telefono: "+506 5555-6666",
          email: "marcelagutierrez@gmail.com"
        },
        resenas: [
          { usuario: "Paciente19", calificacion: 5, comentario: "La Dra. Marcela es muy conocedora y me proporcionó un excelente plan de tratamiento.<br>" },
          { usuario: "Paciente20", calificacion: 4, comentario: "Excelente médica, muy profesional en su enfoque." }
        ],
        biografia: "La Dra. Marcela Gutiérrez es una endocrinóloga especializada en el diagnóstico y tratamiento de trastornos hormonales. Ofrece cuidado compasivo y atención personalizada a sus pacientes."
      },
      {
        id: "04-0404-0404",
        nombre: "Alejandro Sánchez Romero",
        especialidad: "Urología",
        ubicacion: "Av. 4, Puntarenas, Consultorio Médico Puntarenas Oeste",
        horarios: "Martes a Sábado: 8am - 4pm",
        contacto: {
          telefono: "+506 7777-8888",
          email: "alejandrosanchez@gmail.com"
        },
        resenas: [
          { usuario: "Paciente21", calificacion: 4, comentario: "Buena atención y explicación clara sobre mi situación.<br>" },
          { usuario: "Paciente22", calificacion: 5, comentario: "El Dr. Alejandro es muy profesional y me hizo sentir cómodo durante la consulta." }
        ],
        biografia: "El Dr. Alejandro Sánchez es un urología dedicado al diagnóstico y tratamiento de trastornos del sistema urinario. Su enfoque es proporcionar atención de alta calidad y compasión a sus pacientes."
      },
      {
        id: "42-1231-8765",
        nombre: "Pedro Mendoza Campos",
        especialidad: "Psicología",
        ubicacion: "Calle 10, San José, Clínica Mental Oasis",
        horarios: "Lunes a Viernes: 9am - 5pm",
        contacto: {
          telefono: "+506 5555-1234",
          email: "pedromendoza@gmail.com"
        },
        resenas: [
          { usuario: "Paciente23", calificacion: 5, comentario: "El Dr. Pedro es muy empático y me ayudó a superar mis problemas.<br>" },
          { usuario: "Paciente24", calificacion: 4, comentario: "Excelente atención, me sentí comprendido y escuchado durante la terapia." }
        ],
        biografia: "El Dr. Pedro Mendoza es un psicólogo con amplia experiencia en el tratamiento de trastornos mentales. Ofrece terapias personalizadas para ayudar a sus pacientes a mejorar su bienestar emocional."
      },
      {
        id: "78-9876-5432",
        nombre: "Carolina Gutiérrez López",
        especialidad: "Nutrición",
        ubicacion: "Av. 5, Heredia, Consultorio Nutricional Saludable",
        horarios: "Lunes a Jueves: 8am - 4pm",
        contacto: {
          telefono: "+506 7777-5678",
          email: "carolinagutierrez@gmail.com"
        },
        resenas: [
          { usuario: "Paciente25", calificacion: 4, comentario: "Buena atención y plan de alimentación personalizado.<br>" },
          { usuario: "Paciente26", calificacion: 5, comentario: "La Dra. Carolina me ayudó a mejorar mis hábitos alimenticios y mi salud en general." }
        ],
        biografia: "La Dra. Carolina Gutiérrez es una nutricionista comprometida con la promoción de hábitos alimenticios saludables. Ofrece asesoramiento nutricional personalizado para mejorar la calidad de vida de sus pacientes."
      },
      {
        id: "85-5432-1234",
        nombre: "Roberto Cruz Montero",
        especialidad: "Odontología",
        ubicacion: "Calle 2, San José, Clínica Dental Sonrisa Perfecta",
        horarios: "Lunes a Viernes: 10am - 7pm",
        contacto: {
          telefono: "+506 6666-7890",
          email: "robertocruz@gmail.com"
        },
        resenas: [
          { usuario: "Paciente27", calificacion: 5, comentario: "El Dr. Roberto es muy profesional y me realizó un excelente trabajo dental.<br>" },
          { usuario: "Paciente28", calificacion: 4, comentario: "Buena atención y explicación clara sobre mi tratamiento odontológico." }
        ],
        biografia: "El Dr. Roberto Cruz es un odontólogo con experiencia en tratamientos dentales estéticos y restauradores. Su objetivo es brindar a sus pacientes una sonrisa saludable y hermosa."
      },
      {
        id: "21-5678-9785",
        nombre: "Verónica Solís Chaves",
        especialidad: "Dermatología",
        ubicacion: "Av. 8, Cartago, Centro Dermatológico Bella Piel",
        horarios: "Martes a Sábado: 9am - 6pm",
        contacto: {
          telefono: "+506 5555-4321",
          email: "veronicasolis@gmail.com"
        },
        resenas: [
          { usuario: "Paciente29", calificacion: 4, comentario: "Buena atención y resultados rápidos en mi tratamiento dermatológico.<br>" },
          { usuario: "Paciente30", calificacion: 5, comentario: "La Dra. Verónica es muy profesional y me ayudó con mi problema de piel." }
        ],
        biografia: "La Dra. Verónica Solís es una dermatóloga experta en el tratamiento de enfermedades de la piel, cabello y uñas. Su enfoque es proporcionar cuidado de alta calidad y personalizado a cada paciente."
      },
      {
        id: "90-1234-2678",
        nombre: "Fernando Méndez Castro",
        especialidad: "Cirugía General",
        ubicacion: "Calle 3, Alajuela, Hospital Cirugía Avanzada",
        horarios: "Lunes a Viernes: 8am - 4pm",
        contacto: {
          telefono: "+506 7777-8765",
          email: "fernandomendez@gmail.com"
        },
        resenas: [
          { usuario: "Paciente31", calificacion: 5, comentario: "Excelente cirujano, me realizó una operación exitosa.<br>" },
          { usuario: "Paciente32", calificacion: 4, comentario: "Buena atención pre y post operatoria, me hizo sentir en buenas manos." }
        ],
        biografia: "El Dr. Fernando Méndez es un cirujano general con experiencia en una amplia gama de procedimientos quirúrgicos. Ofrece atención de alta calidad y resultados exitosos para mejorar la salud de sus pacientes."
      },
      {
        id: "34-5678-9012",
        nombre: "Laura Salazar Ramírez",
        especialidad: "Neurología",
        ubicacion: "Calle 6, Heredia, Centro Médico Neuronal",
        horarios: "Lunes a Viernes: 9am - 6pm",
        contacto: {
          telefono: "+506 5555-1111",
          email: "laurasalazar@gmail.com"
        },
        resenas: [
          { usuario: "Paciente33", calificacion: 5, comentario: "La Dra. Laura es muy profesional y me proporcionó un excelente tratamiento.<br>" },
          { usuario: "Paciente34", calificacion: 4, comentario: "Buena atención y explicación clara sobre mi condición neurológica." }
        ],
        biografia: "La Dra. Laura Salazar es una neuróloga dedicada al diagnóstico y tratamiento de trastornos neurológicos. Ofrece atención compasiva y efectiva para mejorar la calidad de vida de sus pacientes."
      },
      {
        id: "78-9012-3456",
        nombre: "Santiago Jiménez Solano",
        especialidad: "Ortopedia",
        ubicacion: "Av. 4, San José, Clínica de Ortopedia Avanzada",
        horarios: "Martes a Sábado: 10am - 7pm",
        contacto: {
          telefono: "+506 7777-2222",
          email: "santiagojimenez@gmail.com"
        },
        resenas: [
          { usuario: "Paciente35", calificacion: 4, comentario: "Buena atención y tratamiento efectivo para mi lesión ortopédica.<br>" },
          { usuario: "Paciente36", calificacion: 5, comentario: "El Dr. Santiago es muy hábil y me ayudó a recuperarme rápidamente." }
        ],
        biografia: "El Dr. Santiago Jiménez es un ortopedista especializado en el tratamiento de lesiones y trastornos musculoesqueléticos. Ofrece opciones de tratamiento innovadoras y personalizadas para mejorar la movilidad y la calidad de vida de sus pacientes."
      },
      {
        id: "12-3456-7890",
        nombre: "Ana María Fernández Chacón",
        especialidad: "Ginecología",
        ubicacion: "Calle 9, Cartago, Clínica de Salud Femenina",
        horarios: "Lunes a Viernes: 8am - 5pm",
        contacto: {
          telefono: "+506 5555-3333",
          email: "anamariafernandez@gmail.com"
        },
        resenas: [
          { usuario: "Paciente37", calificacion: 5, comentario: "La Dra. Ana María es muy dedicada y brinda una excelente atención.<br>" },
          { usuario: "Paciente38", calificacion: 4, comentario: "Excelente profesional, me hizo sentir cómoda durante la consulta." }
        ],
        biografia: "La Dra. Ana María Fernández es una ginecóloga comprometida con la salud femenina. Ofrece servicios médicos personalizados y compasivos para mujeres de todas las edades."
      },
      {
        id: "56-7890-1234",
        nombre: "Martín Vargas Sánchez",
        especialidad: "Cardiología",
        ubicacion: "Av. 7, Alajuela, Centro de Cardiología Integral",
        horarios: "Lunes a Viernes: 8am - 4pm",
        contacto: {
          telefono: "+506 7777-4444",
          email: "martinvargas@gmail.com"
        },
        resenas: [
          { usuario: "Paciente39", calificacion: 4, comentario: "Buena atención y seguimiento de mi condición cardíaca.<br>" },
          { usuario: "Paciente40", calificacion: 5, comentario: "El Dr. Martín es muy profesional y me proporcionó un excelente cuidado cardiológico." }
        ],
        biografia: "El Dr. Martín Vargas es un cardiólogo con amplia experiencia en el diagnóstico y tratamiento de enfermedades del corazón. Ofrece atención integral y personalizada para garantizar la salud cardiovascular de sus pacientes."
      },
      {
        id: "90-1234-5678",
        nombre: "María Rodríguez Gómez",
        especialidad: "Psiquiatría",
        ubicacion: "Calle 5, Limón, Consultorio Psiquiátrico Bienestar Mental",
        horarios: "Martes a Sábado: 9am - 6pm",
        contacto: {
          telefono: "+506 5555-4444",
          email: "mariarodriguez@gmail.com"
        },
        resenas: [
          { usuario: "Paciente41", calificacion: 5, comentario: "La Dra. María es muy comprensiva y me proporcionó un excelente tratamiento psiquiátrico.<br>" },
          { usuario: "Paciente42", calificacion: 4, comentario: "Buena atención, me hizo sentir escuchado y comprendido durante la terapia." }
        ],
        biografia: "La Dra. María Rodríguez es una psiquiatra dedicada al bienestar mental de sus pacientes. Ofrece evaluaciones exhaustivas y tratamientos efectivos para una variedad de trastornos psiquiátricos."
      }
           
      
    ];
