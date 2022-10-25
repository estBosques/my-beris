from django.contrib import admin
from .models import Expense, ExpenseType, Category, ExpenseDetail, Tag, TagPerDetail

admin.site.register(Expense)
admin.site.register(ExpenseType)
admin.site.register(Category)
admin.site.register(ExpenseDetail)
admin.site.register(Tag)
admin.site.register(TagPerDetail)