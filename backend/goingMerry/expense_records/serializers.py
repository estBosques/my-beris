from rest_framework import serializers

from .models import Category, Expense, ExpenseType

class ExpenseTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpenseType
        fields = '__all__'

class ExpenseSerializer(serializers.ModelSerializer):
    expenseType = serializers.PrimaryKeyRelatedField(queryset=ExpenseType.objects.all())
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    class Meta:
        model = Expense
        fields = ('id', 'amount', 'expenseType', 'category', 'hasDetails')
        depth = 2
        