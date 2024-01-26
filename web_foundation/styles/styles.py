import reflex as rx

from .fonts import Font
from enum import Enum
from web_foundation.styles.colors import TextColor, Color

# STYLESHEETS
STYLE_SHEETS = [
    #Concatenar espacios "+"
    #Concatenar display=swap
    "https://fonts.googleapis.com/css?family=Comfortaa&display=swap"
]


# Constants
HEADER_MAX_WIDTH = "1000px"
BODY_MAX_WIDTH = "1000px"
FOOTER_MAX_WIDTH = "1000px"

# Sizes
class Size(Enum):
    ZERO = "0px !important"
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    LARGE = "1.5em"
    BIG = "2em"
    VERY_BIG = "4em"
    PLUS1 = "5em"
    PLUS2 = "6em"
    PLUS3 = "7em"

# Styles 

BASE_STYLE = {
    "font_family": Font.DEFAULT.value,
    rx.Button: {
        "width": "100%",
        "height": "100%",
        "padding": Size.SMALL.value,
        "border_radius": Size.DEFAULT.value,
        "bg": "#fbbf24",
        "_hover": {
            "bg": "#f59e0b",
        }
    },
    rx.Link: {
        "text_decoration": "none",
        "_hover": {
            "color": TextColor.SECONDARY.value,
            "text_decoration": "none"
        }
    },
    rx.Heading: {
        "font_family": Font.DEFAULT.value
    }
}

link_navbar_style = dict(
    #font_family = Font.DEFAULT.value,
    margin_left = "20px",
    color = "white"
    #border_radius="15px",
    #border_width="thick"
)

header_bg_image = dict(
    background_image = "background_image.webp",
    background_size = "cover",
    background_repeat = "no-repeat",
    height="100vh",
    #opacity = ".5",
)

body_bg_image = dict(
    #opacity = ".5",
    background_image="/body_background_image.webp",
    background_position="center"    
)

header_title_style = dict(
    font_family = Font.DEFAULT.value,
    font_size = Size.BIG.value
)

header_description_style = dict(
    font_family = Font.DEFAULT.value,
    font_size = Size.LARGE.value
)

cards_style = dict(
    margin_y=Size.DEFAULT.value,
    background_color = Color.SECONDARY.value,
    border_radius=Size.MEDIUM.value,
    padding=Size.DEFAULT.value,
    width="16em"
    
)

accordion__item_style = dict(
    padding_y=Size.DEFAULT.value,
    padding_x=Size.LARGE.value
)