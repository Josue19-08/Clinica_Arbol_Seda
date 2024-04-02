const medicos = [
    {
      id: "1-0111-0111",
      nombre: "Dr. Juan Pérez Aguilar",
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
      id: "2-0222-0222",
      nombre: "Dra. María Gómez Sojo",
      especialidad: "Pediatría",
      ubicacion: "Calle 5, San José, Distrito Médico Los Ángeles",
      horarios: "Lunes a Sábado: 9am - 6pm",
      contacto: {
        telefono: "+506 2222-8787",
        email: "mariagomez@gmail.com"
      },
      resenas: [
        { usuario: "Usuario3", calificacion: 5, comentario: "La Dra. María es muy amable y atenta con los niños.<br>" },
        { usuario: "Usuario4", calificacion: 3, comentario: "Buena médica, pero a veces hay que esperar mucho en la sala de espera." }
      ],
      biografia: "La Dra. María Gómez se especializa en el cuidado de la salud de los niños..."
    },
    {
      id: "3-0333-0333",
        nombre: "Dr. Lisandro Arguedas Masís",
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
        id: "4-0444-0444",
        nombre: "Dra. Sofía Mora Vargas",
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
        id: "5-0555-0555",
        nombre: "Dr. Andrés Rojas Hernández",
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
        id: "6-0666-0666",
        nombre: "Dra. Laura Chacón Marín",
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
        id: "7-0777-0777",
        nombre: "Dr. Javier Morales Garbanzo",
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
      {id: "8-0888-0888",
        nombre: "Dra. Ana Navarro Solís",
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
        id: "9-0999-0999",
        nombre: "Dr. José Aguilar Brenes",
        especialidad: "Ortopedia",
        ubicacion: "Av. 10, Cartago, Clínica Médica Cartago Central",
        horarios: "Martes a Sábado: 9am - 6pm",
        contacto: {
          telefono: "+506 8888-9999",
          email: "joseaguilar@gmail.com"
        },
        resenas: [
          { usuario: "Paciente13", calificacion: 4, comentario: "Buena atención y explicación detallada de mi lesión.<br>" },
          { usuario: "Paciente14", calificacion: 5, comentario: "El Dr. José es muy hábil y me ayudó a recuperarme rápidamente de mi cirugía." }
        ],
        biografia: "El Dr. José Aguilar es un ortopedista especializado en el tratamiento de lesiones y trastornos musculoesqueléticos. Ofrece opciones de tratamiento innovadoras y personalizadas para mejorar la movilidad y la calidad de vida de sus pacientes."
      },
      {
        id: "1-0101-0101",
        nombre: "Dra. Claudia Solano Saenz",
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
        id: "2-0202-0202",
        nombre: "Dr. Carlos Vargas Badilla",
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
        id: "3-0303-0303",
        nombre: "Dra. Marcela Gutiérrez Daniels",
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
        id: "4-0404-0404",
        nombre: "Dr. Alejandro Sánchez Romero",
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
      }
      
      
    ];
