import pygame

def animate(x, y, width, height):
    # Draw a rectangle with the given dimensions
    pygame.draw.rect(screen, (255, 0, 0), (x, y, width, height))

    # Base case: if the width or height is less than 10 pixels, stop the recursion
    if width < 10 or height < 10:
        return

    # Recursive calls: shrink the width and height of the rectangle by 10 pixels
    # and call the animate function again with the new dimensions
    animate(x + 5, y + 5, width - 10, height - 10)
    animate(x - 5, y - 5, width - 10, height - 10)

# Initialize pygame
pygame.init()

# Set up the screen
screen = pygame.display.set_mode((800, 600))

# Call the animate function with the initial dimensions of the rectangle
animate(400, 300, 200, 200)

# Update the display
pygame.display.flip()

# Wait for the user to close the window
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

# Quit pygame
pygame.quit()
