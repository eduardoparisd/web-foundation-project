import reflex as rx

import web_foundation.styles.styles as Styles
from web_foundation.styles.styles import Size as Size
from web_foundation.styles.colors import TextColor


def header() -> rx.Component:
    return rx.vstack(
                rx.flex(
                    rx.vstack(
                        rx.span(
                            rx.span("Bienvenidos",
                                    color=TextColor.SECONDARY.value),
                            " a Fundación Manchitas.",
                            style=Styles.header_title_style
                        ),
                        rx.text("""
                        Tenemos como objetivo poner un alto al maltrato y sobrepoblación animal, 
                        a través de un programa intensivo de esterilizaciones, 
                        de alta calidad, a bajo costo para perros y gatos de rescatistas, 
                        alimentadores y personas de escasos recursos.
                        """,
                        style=Styles.header_description_style
                        )
                    ),
                rx.image(
                    src="header_image.png", width="55%", height="500px"
                ),
                )
            )