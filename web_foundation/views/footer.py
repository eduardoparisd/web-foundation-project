import reflex as rx
import datetime

import web_foundation.styles.styles as style
from web_foundation.styles.styles import Size as Size
from web_foundation.components.link_icon import link_icon
from web_foundation.styles.fonts import Font
from web_foundation.styles.colors import Color


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(
            src="logo.png",
            height=Size.VERY_BIG.value
        ),
        rx.hstack(
            link_icon("https://www.youtube.com/watch?v=n7dFHXfsPHo"),
            link_icon("https://www.youtube.com/watch?v=n7dFHXfsPHo")
        ),
        rx.grid(
            rx.grid_item(
                rx.vstack(
                    rx.link(
                        rx.button("Contáctanos"),
                        href="#"
                    ),
                    rx.hstack(
                        rx.icon(
                            tag="triangle_down",
                        ),
                        rx.text("Ubicación")
                    ),
                    rx.hstack(
                        rx.icon(
                            tag="email",
                        ),
                        rx.text("Correo@correo.com")
                    ),
                    rx.hstack(
                        rx.icon(
                            tag="phone",
                        ),
                        rx.text("+507 123-4567")
                    )
                ),
                row_span=2, 
                col_span=1
            ),
            rx.grid_item(
                rx.vstack(
                    rx.link(
                        rx.button("Adopción"),
                        href="#"
                    ),
                    rx.link(
                        "Nuestros Perros",
                        href="#"
                    ),
                    rx.link(
                        "Nuestros Gatos",
                        href="#"
                    )
                ),
                row_span=2, 
                col_span=1
            ),
            rx.grid_item(
                rx.heading(
                    "Misión",
                    size="sm"
                ),
                rx.text("""
                        Nuestra misión es acabar con el sufrimiento de perros y 
                        gatos inocentes reduciendo el número de camadas no deseadas.
                        """,
                        padding_y=Size.SMALL.value,
                        font_size=Size.MEDIUM.value
                ),
                col_span=2, 
                row_span=1
            ),
            rx.grid_item(
                rx.heading(
                    "Visión",
                    size="sm"
                ),
                rx.text("""
                        La visión de Spay Panamá es un mundo donde el bienestar animal sea lo importante y 
                        se ponga fin al maltrato y crueldad hacia los animales.
                        """,
                        padding_y=Size.SMALL.value,
                        font_size=Size.MEDIUM.value
                ),
                col_span=2, 
                row_span=1, 
            ),
            template_rows="repeat(2, 1fr)",
            template_columns="repeat(4, 1fr)",
            h="200px",
            width="100%",
            gap=4,
            max_width=style.FOOTER_MAX_WIDTH,
            padding_y=Size.LARGE.value,
            margin="0px"
        ),
        rx.hstack(
            rx.spacer(),
            rx.spacer(),
            rx.link(
                "Términos y Condiciones",
                href="#"
            ),
            rx.spacer(),
            rx.link(
                "Políticas de Privacidad",
                href="#"
            ),
            rx.spacer(),
            rx.link(
                "Protección de Datos",
                href="#"
            ),
            rx.spacer(),
            rx.text(f"© Fundación Manchitas 200X-{datetime.date.today().year}."),
            rx.spacer(),
            rx.span(
                "By ",
                rx.link(    
                        "@eduardoparisd",
                        href="https://www.instagram.com/eduardoparisd/",
                        is_external=True
                    ),
            ),
            rx.spacer(),
            rx.spacer(),
            color="white",
            background=Color.ACCENT.value,
            width="100%",
            padding_y=Size.MEDIUM.value
            
        ),
        padding_top=Size.BIG.value,
        font_family = Font.DEFAULT.value,
        
    )