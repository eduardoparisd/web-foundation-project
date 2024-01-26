import reflex as rx

import web_foundation.styles.styles as style
from web_foundation.components.cards import cards
from web_foundation.styles.styles import Size
from web_foundation.styles.fonts import Font

def body() -> rx.Component:
    return rx.vstack(
        rx.heading("Perros y Gatos listos para ser adoptados", 
                   font_size=Size.VERY_BIG.value
                   ),
        rx.text(
                "¡Nuestras mascotas esperan por ti! Encuentra perros y gatos disponibles para adopción por raza, edad, tamaño y color.",
                font_size=Size.LARGE.value
        ),
        rx.vstack(
            rx.hstack(
                cards("Ben"),
                cards("Cosete"),
                cards("Carles"),
            ),
            rx.hstack(
                cards("Tom"),
                cards("Carmen"),
                cards("Fizz")
            ),
            rx.hstack(
                cards("Camy"),
                cards("Thor"),
                cards("Mancha")
            )
        ),
        rx.link(
            rx.button(
                "Ver todas las mascotas",
                padding=Size.LARGE.value,
                border_radius=Size.SMALL.value
                ),
            href="#",
            #margin_y=Size.VERY_BIG.value NO FUNCIONA?
        ),
        #font_family=Font.DEFAULT.value,
        padding_y=Size.VERY_BIG.value,
        #margin_x="20em",
        background="white",
        height="100%",
        
    )