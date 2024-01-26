import reflex as rx

import web_foundation.styles.styles as styles
from web_foundation.styles.colors import Color
from web_foundation.styles.styles import Size
from web_foundation.styles.fonts import Font


def cards(petname: str) -> rx.Component:
    return rx.container(
        rx.hstack(
            rx.heading(
                petname,
                size="md"
                ),
            rx.spacer(),
            rx.icon(tag="check")
        ),
        rx.box(
            rx.image(
                src="dog_image.webp",
                margin_y=Size.LARGE.value
            ),
            border_radius="md",
            width="100%"
        ),
        rx.link(
                rx.button("¡Adoptame!"),
                href="#"
        ),
        style=styles.cards_style
    )