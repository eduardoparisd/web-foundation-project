import reflex as rx

import web_foundation.styles.styles as styles
from web_foundation.styles.fonts import Font

def accordion_FAQ() -> rx.Component:
    return rx.accordion(
        rx.accordion_item(
            rx.accordion_button(
                rx.heading(
                    "Quiero adoptar un perro o un gato",
                    size="sm"
                ),
                rx.spacer(),
                rx.accordion_icon()
            ),
            rx.accordion_panel(
                rx.text("""
                        ¡Estas en el lugar correcto! Adopta Hoy es una plataforma para adopciones de perros y gatos en Panamá. 
                        En nuestro sitio web contamos con cientos de perritos y gatitos listos para ser adoptados, 
                        que se encuentran en búsqueda de un hogar para toda la vida.
                        """),
                rx.text("""
                        En nuestro buscador de mascotas podrás encontrar perros y gatos por raza, edad, tamaño y color. 
                        Tenemos perritos y gatitos para adoptar provenientes de refugios, 
                        recién rescatados y de dueños particulares.
                        """)
            ),
            style=styles.accordion__item_style
        ),
        rx.accordion_item(
            rx.accordion_button(
                rx.heading(
                    "¿Dónde puedo adoptar perros y gatos en Panamá?",
                    size="sm"
                ),
                rx.spacer(),
                rx.accordion_icon()
            ),
            rx.accordion_panel(
                rx.text("""
                        Con Fundación Manchitas no es necesario salir de casa para encontrar a tu próxima mascota. 
                        En nuestro sitio web podrás encontrar cientos de perros y gatos en adopción. 
                        Todas las mascotas mostradas en nuestro sitio web han sido publicadas por refugios, 
                        rescatistas independientes o dueños particulares.
                        """)
            ),
            style=styles.accordion__item_style
        ),
        rx.accordion_item(
            rx.accordion_button(
                rx.heading(
                    "¿Cuánto cuesta adoptar perros y gatos en Panamá?",
                    size="sm"
                ),
                rx.spacer(),
                rx.accordion_icon(),
            ),
            rx.accordion_panel(
                rx.text("""
                        Depende. En algunos casos las organizaciones pueden dar a las mascotas en adopción sin solicitarle donación alguna, 
                        de la misma manera en otros casos los refugios o rescatistas pueden solicitarle que se realice una donación al 
                        momento de adoptar una mascota. Esto es una práctica totalmente normal, 
                        los fondos que las organizaciones recolectan a través de donaciones son destinados para ayudar a 
                        cubrir con los gastos de la organización y así seguir rescatando a más perritos y gatitos.
                        """),
                rx.text("""
                        Adopta Hoy recomienda que siempre tome medidas de seguridad razonables antes de realizar cualquier tipo de pago. 
                        Adopta Hoy no recibe ningún beneficio por parte de las donaciones realizadas.
                        """)
            ),
            style=styles.accordion__item_style
        ),
        allow_multiple=True,
        width="100%",
        font_family = Font.DEFAULT.value
)