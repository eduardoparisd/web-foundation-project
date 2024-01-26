import reflex as rx

# Components
from web_foundation.components.navbar import navbar

# Views
from web_foundation.views.header import header
from web_foundation.views.body import body
from web_foundation.views.footer import footer
from web_foundation.views.faq_body import faq_page

# Styles
import web_foundation.styles.styles as styles
from web_foundation.styles.styles import Size as Size


class State(rx.State):
    pass 


def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                #border_radius="15px",
                #border_width="thick",
                #max_width=styles.HEADER_MAX_WIDTH,
            ),
            style=styles.header_bg_image,
        ),
        rx.center(
            rx.vstack(
                body(),
                max_width=styles.BODY_MAX_WIDTH,
                #border_radius="15px",
                #border_width="thick",

            ),
            style=styles.body_bg_image
        ),
        faq_page(),
        footer()
         
    )

#background general e9ff70
app = rx.App(
    stylesheets=styles.STYLE_SHEETS,
    style=styles.BASE_STYLE
)
app.add_page(
    index,
    title="ParisDev",
    description="Hola, Mi nombre es Eduardo Paris."
    #image=
    )
app.compile()