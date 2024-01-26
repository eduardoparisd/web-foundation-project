import reflex as rx

from web_foundation.components.accordion import accordion_FAQ
from web_foundation.styles.colors import Color, TextColor
from web_foundation.styles.styles import Size

def faq_page() -> rx.Component:
    return rx.vstack(
        rx.heading(
            "Preguntas Frecuentes",
            size="2xl",
            margin_bottom=Size.LARGE.value
        ),
        accordion_FAQ(),
        background=Color.PRIMARY.value,
        padding_y=Size.PLUS3.value,
        padding_x="12em"
    )