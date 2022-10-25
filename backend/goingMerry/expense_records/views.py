from rest_framework import viewsets

from .serializers import ExpenseSerializer
from .models import Expense

class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all().order_by('id')
    serializer_class = ExpenseSerializer