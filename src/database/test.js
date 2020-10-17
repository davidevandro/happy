const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db=>{
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-22.9697343",
        lng: "-43.1878931", 
        name: "Lar dos Meninos",
        about: "Presta assistência a crianças de 06 a 17 anos que se encontre em situação de riscou e/ou vulnerabilidade social.",
        whatsapp: "998978994",
        images: [
            "https://images.unsplash.com/photo-1600711725042-deb9fbaeb1e3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1597992350431-56cb7e28a7a2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    });

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente um orfanato pelo id
    //const orphanage = await db.all("SELECT * FROM orphanages WHERE id = '1'")

    //deletar dado da tabela
    //await db.run("DELETE FROM orphanages WHERE id = '1'")
})