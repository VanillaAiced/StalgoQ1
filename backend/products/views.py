from django.shortcuts import render
from django.http import JsonResponse
from base.products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Product, Rating

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products/',
        '/api/products/create/',
        
        '/api/products/upload/',
        
        '/api/products/<id>/reviews/',
        
        '/api/products/top/',
        '/api/products/<id>/',
        
        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>',
        '/api/products/<id>/rate/',
    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    # Return products from the static list with ratings
    return Response(products)

@api_view(['GET'])
def getProduct(request, pk):
    product = None
    for i in products:
        if i['_id'] == pk:
            product = i
            break
    return Response(product)

@api_view(['POST'])
def rateProduct(request, pk):
    try:
        rating_value = request.data.get('rating')
        user_identifier = request.META.get('REMOTE_ADDR', 'unknown')
        
        if not rating_value or not (1 <= int(rating_value) <= 5):
            return Response({'error': 'Rating must be between 1 and 5'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Find product in static list and update
        product_found = False
        for product in products:
            if product['_id'] == pk:
                product_found = True
                # Create or update rating
                product_key = f"ratings_{pk}"
                if product_key not in globals():
                    globals()[product_key] = {}
                
                globals()[product_key][user_identifier] = int(rating_value)
                
                # Calculate new average rating
                ratings_dict = globals()[product_key]
                total_ratings = sum(ratings_dict.values())
                count = len(ratings_dict)
                product['rating'] = total_ratings / count if count > 0 else 0
                product['numReviews'] = count
                break
        
        if not product_found:
            return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
        
        return Response({
            'message': 'Rating submitted successfully',
            'rating': product['rating'],
            'numReviews': product['numReviews']
        })
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)