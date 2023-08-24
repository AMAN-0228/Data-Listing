export const filtercontent = [
    {
        department: "customer_service",
        sub_departments: [
            "support",
            "customer_success"
        ]
    },
    {
        department: "design",
        sub_departments: [
            "graphic_design",
            "product_design",
            "web_design"
        ]
    }
]

export const filterFlags = {
    department : [
        {
            customer_service:false,
            sub_departments :{
                support :false,
                customer_success: false,
            }
            
        },
        {
            design : false,
            sub_departments :{
                graphic_design: false,
                product_design : false,
                web_design : false,
            }
        }
    ]
}