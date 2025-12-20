from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    image = models.CharField(max_length=200, blank=True, null=True)
    countInStock = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name
    
    @property
    def rating(self):
        ratings = self.ratings.all()
        if ratings.count() == 0:
            return 0
        return sum([r.value for r in ratings]) / ratings.count()
    
    @property
    def numReviews(self):
        return self.ratings.count()


class Rating(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='ratings')
    user_identifier = models.CharField(max_length=200)  # Could be IP address or session ID
    value = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ['product', 'user_identifier']
    
    def __str__(self):
        return f'{self.product.name} - {self.value} stars'
