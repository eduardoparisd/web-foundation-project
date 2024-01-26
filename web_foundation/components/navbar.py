import reflex as rx

import web_foundation.styles.styles as styles
from web_foundation.styles.styles import Size as Size
from web_foundation.styles.colors import Color, TextColor
from web_foundation.styles.fonts import Font

def navbar() -> rx.Component:
    return rx.hstack(
        rx.image(
            src="logo.png",
            width=Size.BIG.value,
            height=Size.BIG.value,
        ),
        rx.text(
            "Fundación",
            font_family=Font.DEFAULT.value,
            color="white"
        ),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.spacer(),
        rx.link(
            "Inicio",
            href="/",
            style=styles.link_navbar_style
        ),
        rx.spacer(),
        rx.link(
            "Adopta",
            href="/",
            style=styles.link_navbar_style
        ),
        rx.spacer(),
        rx.link(
            "Jornadas",
            href="/",
            style=styles.link_navbar_style
        ),
        rx.spacer(),
        rx.link(
            "¿Como Ayudar?",
            href="/",
            style=styles.link_navbar_style
        ),
        rx.spacer(),
        rx.link(
            "Hogar Temporal",
            href="/",
            style=styles.link_navbar_style
        ),
        rx.spacer(),
        rx.link(
            "Blog",
            href="/",
            style=styles.link_navbar_style
        ),
        rx.spacer(),
        rx.link(
            "Sobre Nosotros",
            href="/",
            style=styles.link_navbar_style
        ),
        rx.spacer(),
        rx.link(
            "Contáctanos",
            href="/",
            style=styles.link_navbar_style
        ),
        position="sticky",
        bg="#171502",
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0",
        #Para separar los botones del navbar y el logo
        justify_content="space-between",
        border_bottom="0.25em solid white",
        width="100%"
    )